'use client';
import { DeleteIcon, DisLikeIcon, EditIcon, EyeIcon, LikeIcon, SearchIcon } from '@/components/icons';
import { Chip, ChipProps } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/pagination';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
import { paymentTableConfig } from '@/config/site';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import { Divider } from '@nextui-org/divider';
import { Avatar } from '@nextui-org/avatar';
import { cancelUserById, getUsers, searchUsersInString } from '@/lib/api';
import { formatDate } from '@/utils/utils';
import { Badge } from '@nextui-org/badge';
import { useStore } from '@/store/store';
import { Link } from '@nextui-org/link';

interface Row {
  _id: string;
  avatar: string;
  name: string;
  paymentStatus: boolean;
  totalIncome: number;
  paid: number;
  unPaid:number;
  status : boolean;
  lastPaidDate : Date;
  requestAction:boolean;
  actions: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';


export default function PaymentPage() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<Row[]>([]);
  const user = useStore((state) => state.user);
  const router = useRouter();  
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState<string>('');
  const rowsPerPage = 10;

  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const setMessage = useStore((state) => state.setMessage);

  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  const token = user?.token;

  const handleCheckout = async (userId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const stripe = await stripePromise;

    try {
      const response = await fetch(`${API_URL}/api/payment/create-checkout-session1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        setErrorMessage('Failed to create checkout session');
        return;
      }
      const { id, role } = await response.json();

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      const cancelUser = async (userId) => {
        try {
          await cancelUserById({ userId: userId });
          // setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (error) {
          console.log(error);
        }
      };
      cancelUser(id);
      if (error) {
        setErrorMessage('Stripe checkout failed');
      } else {
        setMessage('Success');
      }
    } catch (err) {
      setErrorMessage('Failed to initiate checkout');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUsers({
          perPage: rowsPerPage,
          page: page,
          sort: 'createdAt',
        });
        setTotalPages(res.totalPages);
        setUsers(res.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (inputValue.length === 0) {
      fetchData();
    }
  }, [page, inputValue]);

  const memoizedSetUsers = useCallback(setUsers, [setUsers]);
  const memoizedSetTotalPages = useCallback(setTotalPages, [setTotalPages]);

  useEffect(() => {
    if (inputValue.length !== 0) {
      const searchUsers = async () => {
        try {
          memoizedSetUsers([]);
          const res = await searchUsersInString({
            inputValue,
            page,
          });
          const { users, totalPages } = res;
          memoizedSetUsers(users);
          memoizedSetTotalPages(totalPages);
        } catch (error) {
          console.log(error);
        }
      };
      searchUsers();
    }
  }, [inputValue, memoizedSetTotalPages, memoizedSetUsers, page]);

  const handleCancel = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const cancelUser = async (id) => {
      try {
        await cancelUserById({ userId: id });
        // setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } catch (error) {
        console.log(error);
      }
    };
    cancelUser(id);
  };

 const renderCell = useCallback((users: Row, columnKey: React.Key) => {
    const key = columnKey as keyof Row;
    const cellValue = users[key];

    switch (key) {
      case 'avatar':
        return (
            <Badge content="" color={`${users?.status ? "success" : "danger"}`} shape="circle" placement="bottom-right">
              <div className="flex flex-col rouned-md fit-content">
                  <Avatar src={cellValue ? String(cellValue) : '/profile/user.png'} />
              </div>
            </Badge>
        );
      case 'name':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{String(cellValue)}</p>
          </div>
        );
      case 'unPaid':{
        const date = users?.totalIncome - users?.paid;
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{String(date)}</p>
          </div>
        );
      }
      case 'paymentStatus':{
        const date = users?.paymentStatus ? "未確認" : "確認済み"; 
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{String(date)}</p>
          </div>
        );
      }
      case 'lastPaidDate':{
        const date = cellValue as Row['lastPaidDate'];
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px]">{formatDate(String(date))}</p>
          </div>
        );
      }
      case 'actions':
        return (
          <div className="relative flex items-center justify-center gap-6">
            {users?.requestAction && (
              <>
                <Tooltip color="warning" content="確認">
                  <span
                    className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={(e) => handleCheckout(users._id, e)}
                  >
                    {/* <EditIcon /> */}
                    <LikeIcon />
                  </span>
                </Tooltip>

                <Tooltip color="danger" content="キャンセル">
                  <span
                    className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={(event) => handleCancel(users._id, event)}
                  >
                    {/* <DeleteIcon /> */}
                    <DisLikeIcon />
                  </span>
                </Tooltip>
              </>
            )}

            <Tooltip color="primary" content="詳細 ">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
                <Link href={`/paymentManage/detail/${users._id}`}>
                  <EyeIcon />
                </Link>
              </span>
            </Tooltip>
          </div>

        );
      default:
        return <>{cellValue !== undefined ? String(cellValue) : "-"}</>;
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col lg:px-[60px] md:px-[40px] sm:px-[10px] xsm:px-[5px] py-[30px] gap-12">
      <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
        <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            isClearable
            fullWidth={true}
            className="h-full w-full rounded-[15px] border border-2"
            placeholder="検索..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
      <div className="w-full mx-auto lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
              base: 'w-full',
            }}
            topContent={
              <div>
                <div className="flex justify-start my-[20px]">
                  <h1 className="text-[24px] text-[#4291EF]">ユーザリスト</h1>
                </div>
                <Divider />
              </div>
            }
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={totalPages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader columns={paymentTableConfig}>
              {(column) => (
                <TableColumn key={column.uid} align="center">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item._id} className="cursor-pointer">
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
