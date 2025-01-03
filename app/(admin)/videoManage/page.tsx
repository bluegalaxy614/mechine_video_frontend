'use client';
import { DeleteIcon, EditIcon, SearchIcon,EyeIcon } from '@/components/icons';
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
import { videoTableConfig } from '@/config/site';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import Image from 'next/image';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { deleteVideoById, discardVideoById, getAllVideos, searchVideoInString } from '@/lib/api';
import { formatDate } from '@/utils/utils';
interface Row {
  _id: string;
  title: string;
  thumbnailsUrl: string;
  description: string;
  posterName: string;
  selectedCategory: string;
  selectedSubCategory: string;
  videoDuration:Number;
  views:Number;
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
  const [inputValue, setInputValue] = useState<string>('');
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllVideos({
          page: page,
          perPage: rowsPerPage,
          sort: 'createdAt',
        });
        setTotalPages(res.totalPages);
        setVideos(res.videos);
      } catch (error) {
        console.log(error);
      }
    };
    if (inputValue.length === 0) {
      fetchData();
    }
  }, [page, inputValue]);

  const handleDelete = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const deleteRow = async (id) => {
      try {
        await deleteVideoById({ videoId: id });
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video._id !== id),
        );
      } catch (error) {
        console.log(error);
      }
    };
    deleteRow(id);
  };
  const handleDiscard = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    const deleteRow = async (id) => {
      try {
        await discardVideoById({ videoId: id });
        const res = await getAllVideos({
          page: page,
          perPage: rowsPerPage,
          sort: 'createdAt',
        });
        setTotalPages(res.totalPages);
        setVideos(res.videos);
      } catch (error) {
        console.log(error);
      }
    };
    deleteRow(id);
  };
  const renderCell = useCallback((videos: Row, columnKey: React.Key) => {
    const key = columnKey as keyof Row;
    const cellValue = videos[key];

    switch (key) {
      case 'thumbnailsUrl':
        return (
          <div className="flex flex-col rounded-md w-[71px] h-[71px] overflow-hidden">
            <Image
              src={String(cellValue)}
              fill
              alt="thumbnail"
              unoptimized={true}
            />
          </div>
        );
      case 'title':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'description':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize truncate">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'posterName':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'selectedCategory':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'uploadDate':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {formatDate(String(cellValue))}
            </p>
          </div>
        );
      case 'videoDuration':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {String(Number(cellValue).toFixed(2))}
            </p>
          </div>
        );
      case 'views':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-[14px] capitalize">
              {String(cellValue)}
            </p>
          </div>
        );
      case 'status':
        return (
          <Chip
            color={statusColorMap[videos.status]}
            size="md"
            variant="flat"
            className="min-w-[100px] text-center"
          >
            {String(cellValue)}
          </Chip>
        );
      default:
        return <>{String(cellValue)}</>;
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const memoizedSetVideos = useCallback(setVideos, [setVideos]);
  const memoizedSetTotalPages = useCallback(setTotalPages, [setTotalPages]);

  useEffect(() => {
    if (inputValue.length !== 0) {
      const searchVideos = async () => {
        try {
          memoizedSetVideos([]);
          const perPage = 10;
          const res = await searchVideoInString({
            inputValue,
            page,
            perPage,
          });
          const { video, totalPages } = res;
          memoizedSetVideos(video);
          memoizedSetTotalPages(totalPages);
        } catch (error) {
          console.log(error);
        }
      };
      searchVideos();
    }
  }, [inputValue, page, memoizedSetTotalPages, memoizedSetVideos]);

  return (
    <section className="h-[calc(100vh-90px)] flex flex-col lg:px-[60px] md:px-[40px] sm:px-[10px] xsm:px-[5px] py-[30px] gap-12">
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
      <div className="w-full mx-auto lg:px-[0px] md:px-[40px] sm:px-[50px] xsm:px-[35px]">
        <div className="w-full over-flow-x-scroll">
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
                          <Tooltip color="primary" content="編集">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                              <Link href={`/videoManage/edit/${item._id}`}>
                                <EditIcon />
                              </Link>
                            </span>
                          </Tooltip>
                          <Tooltip color="danger" content="点検">
                            <span
                              className="text-lg text-danger cursor-pointer active:opacity-50"
                              onClick={(event) => handleDiscard(item._id, event)}
                            >
                              <EyeIcon />
                            </span>
                          </Tooltip>
                          <Tooltip color="danger" content="削除">
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
