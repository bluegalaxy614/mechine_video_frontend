import { Divider } from '@nextui-org/divider';
import { useEffect, useMemo, useState } from 'react';
import SubCategoryButton from './subCategoryButton';
import { categoryConfig } from '@/config/site';
import CategoryButton from './categoryButton';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Image } from '@nextui-org/image';
import { SearchIcon } from './icons';
import { Input } from '@nextui-org/input';
import { Selection } from '@nextui-org/table';

const SearchCategories = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(['最新順']),
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  const [selectAll, setSelectAll] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );

  console.log(selectedSubCategories);

  useEffect(() => {
    if (!selectAll) {
      setSelectedCategories([]);
    } else {
      const allCategoryIds = categoryConfig.map((category) => category.id);
      console.log(allCategoryIds, 'here');

      setSelectedCategories(allCategoryIds);
    }
  }, [selectAll]);

  const handleClickAllButton = () => {
    setSelectAll(!selectAll);
  };

  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="flex lg:flex-row md:flex-row sm:flex-row xsm:flex-col justify-between lg:mt-[117px] lg:mb-[84px] lg:mx-[0px] md:mx-[40px] sm:mx-[20px] xsm:mx-[10px] xsm:items-end gap-[30px] my-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] xsm:px-[40px]">
        <div className="lg:w-[700px] md:w-[500px] sm:w-[300px] xsm:w-full">
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
        <div className="flex items-center">
          <Button className="h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto bg-[#F4F4F4] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]">
            カテゴリ
          </Button>
          <p className="flex justify-center items-center px-[20px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]">
            並べ替え
          </p>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button className="capitalize h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border hover:shadow-default-300 px-[8px] py-[1px] mx-auto  lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]">
                {selectedValue}
                <Image
                  width={21}
                  height={21}
                  src="/icons/icon-arrange.png"
                  alt=""
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Select Arrange Type"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="最新順">最新順</DropdownItem>
              <DropdownItem key="人気順">人気順</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="lg:mx-[20px] md:mx-[40px] sm:ml-[40px] sm:mr-[50px] xsm:ml-[30px] xsm:mr-[40px]">
        <div className="flex grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 xsm:grid-cols-3 gap-3 divide-gray-200 py-[9px] mb-[40px]">
          <Button
            className={`h-[41px] lg:w-[144px] md:w-[144px] sm:w-[144px] xsm:w-[90px] rounded-full border shadow-md hover:shadow-default-300 px-[8px] py-[1px] mx-auto lg:text-[14px] md:text-[14px] sm:text-[14px] xsm:text-[10px]
                                    ${selectAll ? 'bg-[#4291EF]' : 'bg-default-100'}`}
            onClick={handleClickAllButton}
          >
            All
          </Button>
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
        <div className="flex flex-wrap justify-start gap-3 py-[9px] h-[208px] overflow-y-auto my-[20px]">
          {/* {
            categoryConfig
              .flatMap((category) => category.subCategories)
              .map((category) => (
                <SubCategoryButton key={category.id} id={category.id} name={category.label} setSelectedSubCategories={setSelectedSubCategories} />
              ))
              } */}
          {categoryConfig
            .filter((category) => selectedCategories.includes(category.id))
            .flatMap((category) => category.subCategories)
            .map((subCategory, index) => (
              <SubCategoryButton
                key={index}
                id={subCategory.id}
                name={subCategory.label}
                setSelectedSubCategories={setSelectedSubCategories}
              />
            ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default SearchCategories;