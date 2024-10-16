import { Divider } from '@nextui-org/divider';
import { useEffect, useMemo, useState } from 'react';
import SubCategoryButton from './subCategoryButton';
import { categoryConfig } from '@/config/site';
import CategoryButton from './categoryButton';
import { Button } from '@nextui-org/button';
import { SearchIcon } from './icons';
import { Input } from '@nextui-org/input';
import { searchVideos } from '@/lib/api';
import { Select, SelectItem } from '@nextui-org/select';
import { Selection } from '@nextui-org/table';

export default function SearchCategories({
  setVideos,
  setTotalPages,
  currentPage
}) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["uploadDate"]));
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState(
    []
  );

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        console.log('Fetching search videos...');
        const res = await searchVideos(
          { selectedCategories, selectedSubCategories, currentPage, selectedKeys }
        )
        console.log(res)
        const { videos, totalPage } = res;
        setVideos(videos)
        setTotalPages(totalPage)
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
    fetchVideos()
  }, [selectedCategories, selectedSubCategories, selectedKeys])

  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col justify-between lg:mt-[50px] lg:mb-[40px] lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px] xsm:items-end gap-[30px] my-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] xsm:px-[40px]">
        <div className="lg:w-[700px] md:w-[500px] sm:w-[300px] xsm:w-full">
          <Input
            isClearable
            fullWidth={true}
            radius="lg"
            className="h-[48px] block w-full resize-none border-0 focus-visible:outline-none bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary"
            placeholder="検索..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="flex items-center">
          <Button className="h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto bg-[#F4F4F4] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]">
            カテゴリ
          </Button>
          <p className="flex justify-center items-center px-[20px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]">
            並べ替え
          </p>
          <Select
            defaultSelectedKeys={"uploadDate"}
            variant="bordered"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            className="h-[41px] w-[144px] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]"
          >
            <SelectItem
              key={"uploadDate"}
              value={"uploadDate"}
            >
              最新順
            </SelectItem>
            <SelectItem
              key={"views"}
              value={"views"}
            >
              人気順
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="lg:mx-[20px] md:mx-[40px] sm:ml-[40px] sm:mr-[50px] xsm:ml-[30px] xsm:mr-[40px]">
        <div className="flex grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 xsm:grid-cols-3 gap-3 divide-gray-200 py-[9px] mb-[40px]">
          {categoryConfig.map((category, index) => (
            <CategoryButton
              key={index}
              id={category.id}
              name={category.label}
              setSelectedCategories={setSelectedCategories}
            />
          ))}
        </div>
        <Divider />
        <p className="w-[181px] h-[35px] rounded-full bg-[#E4F1FF] text-[20px] flex justify-center items-center my-[40px]">
          サブカテゴリ
        </p>
        <div className="flex flex-wrap content-start gap-3 py-[9px] h-[208px] overflow-y-auto my-[20px]">
          {categoryConfig
            .filter((category) => selectedCategories.includes(category.id))
            .flatMap((category) => category.subCategories)
            .map((subCategory, index) => (
              <SubCategoryButton
                key={index}
                id={subCategory.id}
                name={subCategory.label}
                category={subCategory.category}
                setSelectedSubCategories={setSelectedSubCategories}
              />
            ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};