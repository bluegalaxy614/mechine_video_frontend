'use client';
import React, { useCallback, useEffect, useState } from 'react';
import BoxImage from '@/components/boxImage';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';
import { Chip, ChipProps } from '@nextui-org/chip';
import { Tooltip } from '@nextui-org/tooltip';
import { DeleteIcon } from '@/components/icons';
import { tableConfig } from '@/config/site';
import { Button } from '@nextui-org/button';
import { Pagination } from '@nextui-org/pagination';
import { deleteVideoById, getPosterVideos } from '@/lib/api';
import { useStore } from '@/store/store';
import { useRouter } from 'next/navigation';

const statusColorMap: Record<string, ChipProps['color']> = {
  支払い: 'success',
  未払い: 'danger',
  保留中: 'warning',
};
interface Row {
  _id: string;
  title: string;
  videoDuration: string;
  views: string;
  revenue: string;
  status: '未払い' | '支払い' | '保留中'; // use a union type for the possible statuses
}
[];

export default function PosterPaymentPage() {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const [pages, setPages] = useState(0);

  const [paidVideos, setPaidVideos] = useState('0');
  const [unPaidVideos, setUnPaidVideos] = useState('0');
  const [totalPaidMounts, setTotalPaidMounts] = useState('0');

  const setMessage = useStore((state) => state.setMessage);
  const setErrorMessage = useStore((state) => state.setErrorMessage);
  const user = useStore((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await getPosterVideos({
          page: page,
          perPage: 10,
          sort: 'uploadDate',
        });
        const {
          currentPage,
          totalPages,
          videos,
          paidVideos,
          unPaidVideos,
          totalPaidMounts,
        } = res;
        setPage(currentPage);
        setVideos(videos);
        setPages(totalPages);
        setPaidVideos(paidVideos);
        setUnPaidVideos(unPaidVideos);
        setTotalPaidMounts(totalPaidMounts);
      } catch (error) {
        setErrorMessage(error);
        console.log(error);
      }
    };
    fetchVideos();
  }, [page, setErrorMessage]); // Add setErrorMessage to the dependency array

  const handleGetPaid = () => {};
  const handleDelete = useCallback(
    (id: string, event: React.MouseEvent) => {
      event.preventDefault();
      const deleteRow = async (id: string) => {
        try {
          const res = await deleteVideoById({ videoId: id });
          setMessage(res.message);
          setVideos((prevVideos) =>
            prevVideos.filter((video) => video._id !== id),
          );
        } catch (error) {
          console.log(error);
        }
      };
      deleteRow(id);
    },
    [setMessage, setVideos], // Empty dependency array since it doesn't rely on other variables
  );

  const renderCell = useCallback(
    (user: Row, columnKey: React.Key) => {
      const cellValue = user[columnKey as keyof Row];

      switch (columnKey) {
        case 'title':
        case 'videoDuration':
        case 'views':
        case 'revenue':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-[14px] capitalize">{cellValue}</p>
            </div>
          );
        case 'status':
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[user.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip color="danger" content="Delete">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={(event) => handleDelete(user._id, event)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDelete], // Now 'handleDelete' is stable and won't cause re-renders
  );

  return (
    <div className="min-h-[calc(100vh-90px)]">
      <section className="max-w-[1280px] mx-auto flex flex-wrap gap-4 lg:justify-between md:justify-between sm:justify-between xsm:justify-center lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px] pt-[50px]">
        <BoxImage
          id={1}
          image={'/icons/icons-checked.png'}
          title="総投稿件数"
          info={paidVideos}
          unit="件"
        />
        <BoxImage
          id={2}
          image={'/icons/icon-cancel.png'}
          title="未払い動画の数"
          info={unPaidVideos}
          unit="件"
        />
        <BoxImage
          id={3}
          image={'/icons/icon-coin.png'}
          title="未払い総額"
          info={`${totalPaidMounts}万+`}
          unit="円"
        />
      </section>

      {/* Section for the payment table */}
      <section className="max-w-[1280px] mx-auto my-[60px] lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <div className="flex justify-between my-[20px]">
            <h1 className="text-[24px] text-[#4291EF]">支払い状態</h1>
            <Button
              className="w-[181px] h-[31px] rounded-full bg-[#4291EF] text-[#FFFFFF] flex justify-center items-center text-[20px]"
              onClick={handleGetPaid}
            >
              リクエストする
            </Button>
          </div>
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
              wrapper: 'min-h-[500px]',
              base: 'w-full',
            }}
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader columns={tableConfig}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === 'actions' ? 'center' : 'start'}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={videos}>
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
      </section>
      <footer className="w-full flex items-center justify-center py-3 bg-[#4291EF]">
        <p className="text-white text-[20px]"> All rights reserved.</p>
      </footer>
    </div>
  );
}
