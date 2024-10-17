'use client';
import { DeleteIcon, EditIcon, SearchIcon } from '@/components/icons';
import { Chip, ChipProps } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { Pagination } from '@nextui-org/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
// import { videoTableRows } from '@/config/data';
import { videoTableConfig } from '@/config/site';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import Image from 'next/image';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { deleteVideoById, getAllVideos } from '@/lib/api';
import { formatDate } from '@/utils/utils';
interface Row {
  _id: string;
  title: string;
  thumbnailsUrl: string;
  description: string;
  posterName: string;
  selectedCategory: string;
  selectedSubCategory: string;
  status: string;
  uploadDate: string;
  actions: string;
}

const statusColorMap: Record<string, ChipProps['color']> = {
  支払い: 'success',
  未払い: 'danger',
  保留中: 'warning',
};

export default function VideoManagePage() {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState<Row[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [message, setMessage] = useState<String>('');
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllVideos({ page: page, perPage: rowsPerPage, sort: 'createdAt' });
        setTotalPages(res.totalPages);
        setVideos(res.videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const handleDelete = (id: String, event: React.MouseEvent) => {
    event.preventDefault();
    const deleteRow = async (id) => {
      try {
        const res = await deleteVideoById({ videoId: id });
        setMessage(res.message)
        setVideos((prevVideos) => prevVideos.filter(video => video._id !== id));
      } catch (error) {
        console.log(error)
      }
    }
    deleteRow(id);
  }

  const renderCell = useCallback((videos: Row, columnKey: React.Key) => {
    const key = columnKey as keyof Row;
    const cellValue = videos[key];

    switch (key) {
      case 'thumbnailsUrl':
        return (
          <div className="flex flex-col rounded-md w-[71px] h-[71px] overflow-hidden">
            <Image
              src={String(cellValue)}
              width={71}
              height={47}
              alt="thumbnail"
              unoptimized={true}
            />
          </div>
        );
      case 'title':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{String(cellValue)}</p>
          </div>
        );
      case 'description':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize truncate">{String(cellValue)}</p>
          </div>
        );
      case 'posterName':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{String(cellValue)}</p>
          </div>
        );
      case 'selectedCategory':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{String(cellValue)}</p>
          </div>
        );
      case 'uploadDate':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">{formatDate(cellValue)}</p>
          </div>
        );
      case 'status':
        return (
          <Chip color={statusColorMap[videos.status]} size="md" variant="flat" className="min-w-[100px] text-center">
            {String(cellValue)}
          </Chip>
        );
      default:
        return <>{String(cellValue)}</>;
    }
  }, []);

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col px-[60px] py-[30px] gap-12">
      <div className="max-w-[913px] lg:px-0 md:px-[40px] sm:px-[50px] xsm:px-[30px]">
        <Input
          isClearable
          fullWidth={true}
          radius="lg"
          className="h-[48px] rounded-full"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focus=true]:bg-default-200/50',
              'dark:group-data-[focus=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder="検索..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="w-full mx-auto lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full">
          <Table
            isHeaderSticky
            aria-label="Payment Table"
            selectionMode="multiple"
            color="primary"
            classNames={{
              // wrapper: 'min-h-[500px]',
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
            <TableHeader columns={videoTableConfig}>
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
                    <TableCell>
                      {columnKey === 'actions' ? (
                        <div className="relative flex items-center gap-2">
                          <Tooltip color="primary" content="Edit">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                              <Link href={`/videoManage/edit/${item._id}`}>
                                <EditIcon />
                              </Link>
                            </span>
                          </Tooltip>
                          <Tooltip color="danger" content="Delete">
                            <span
                              className="text-lg text-danger cursor-pointer active:opacity-50"
                              onClick={(event) => handleDelete(item._id, event)}
                            >
                              <DeleteIcon />
                            </span>
                          </Tooltip>
                        </div>
                      ) : (
                        renderCell(item, columnKey) // Your other render logic for other columns
                      )}
                    </TableCell>
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