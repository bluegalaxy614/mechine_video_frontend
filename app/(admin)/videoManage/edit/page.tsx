'use client';
import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { Select, SelectItem } from '@nextui-org/select';
import { useState } from 'react';
import { categoryConfig } from '@/config/site';

export default function EditPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');

  // Handle category change
  const handleCategoryChange = (value: string) => {
    console.log(value);
    setSelectedCategory(value);
    setSelectedSubCategory(''); // Reset subcategory when main category changes
  };

  // Handle subcategory change
  const handleSubCategoryChange = (value: string) => {
    console.log(value);
    setSelectedSubCategory(value);
    console.log(selectedSubCategory);
  };

  // Filter subcategories based on the selected main category
  const filteredSubCategories =
    categoryConfig.find((category) => category.id === selectedCategory)
      ?.subCategories || [];

  return (
    <div className="h-[calc(100vh-90px)] lg:w-full xsm:w-fit flex flex-col justify-between">
      <div className="lg:w-[1280px] md:w-[940px] sm:w-[700px] flex flex-col mx-auto justify-start lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] gap-12">
        <h1 className="lg:text-[30px] md:text-[28px] sm:text-[24px] xsm:text-[22px] text-[#4291EF] font-bold">
          動画編集と承認
        </h1>
        <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] xsm:text-[12px] text-[#212121] font-bold">
          動画のカテゴリ変更や承認を行い、公開設定を管理します。
        </p>
      </div>
      <section className="max-w-[1280px] mx-auto flex flex-wrap lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] gap-12">
        <div className="flex flex-col w-[388px] h-[514px] gap-4 mx-auto">
          <div className="flex lg:mt-[85px] md:mt-[55px] sm:mt-[45px] xsm:mt-[35px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <div className="w-[300px] flex flex-col justify-between gap-6 mx-auto">
              <div className="w-[297px] h-[196px] bg-[#E4F1FF] flex justify-center items-center rounded-lg mx-auto">
                <Image
                  width={73}
                  height={73}
                  src="/icons/icon-play.png"
                  alt="Upload"
                  className="w-[105px] h-[105px] p-0 hover:cursor-pointer hover:opacity-50 transition-opacity duration-200"
                />
              </div>

              <div>
                <p className="mb-2">Youtubeリンク</p>
                <Input
                  width={387}
                  type="url"
                  placeholder="www.youtube.com/watch?v=dQw4w9WgXcQ"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        https://
                      </span>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  w-[388px] h-[514px] gap-4 mx-auto">
          <div>
            <p>
              タイトル:<strong>コマツPC210の油圧ポンプ交換手順</strong>
            </p>
          </div>
          <div>
            <p>説明:</p>
            <p>
              この動画では、コマツPC210油圧ショベルの油圧ポンプ交換手順を解説します。具体的な工具の使い方や安全手順も紹介し、初心者でもわかりやすい内容となっています。
            </p>
          </div>

          {/* Main Category Select */}
          <div>
            <p className="mb-2">メインカテゴリ</p>
            <Select
              size="sm"
              aria-label="select the category"
              selectedKeys={selectedCategory}
              className="w-full h-[41px] rounded-md"
              onChange={(value) => {
                console.log(value);
                handleCategoryChange(value.target.value);
              }}
              // onChange={(value) => handleCategoryChange(value.target.value)}
            >
              {categoryConfig.map((category) => (
                <SelectItem key={category.id} value={category.label}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Subcategory Select */}
          <div>
            <p className="mb-2">サブカテゴリ</p>
            <Select
              size="sm"
              aria-label="select the subcategory"
              // selectedKeys={selectedSubCategory}
              className="w-full h-[41px] rounded-md"
              onChange={(value) => handleSubCategoryChange(value.target.value)}
              isDisabled={!selectedCategory} // Disable if no main category is selected
            >
              {filteredSubCategories.map((subCategory) => (
                <SelectItem key={subCategory.id} value={subCategory.label}>
                  {subCategory.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <p className="mb-2">ステータスの変更</p>
            <Input
              width={387}
              height={41}
              placeholder="承認済み"
              labelPlacement="outside"
            />
          </div>
        </div>
        <div className="flex flex-col w-[388px] max-h-[514px] gap-12 mx-auto">
          <div className="flex">
            <p className="w-[100px]">動画コード:</p>
            <p className="font-bold">CM20240901</p>
          </div>
          <div className="flex">
            <p className="w-[100px]">機械名:</p>
            <p className="font-bold">Komatsu PC210</p>
          </div>
          <div className="flex">
            <p className="w-[100px]">型式:</p>
            <p className="font-bold">PC210-10</p>
          </div>
          <div className="flex">
            <p className="w-[100px]">メーカー:</p>
            <p className="font-bold">Komatsu</p>
          </div>
          <div className="flex">
            <p className="w-[100px]">ステータス:</p>
            <p className="text-center text-[#725C10] p-[2px] w-[144px] h-[28px] rounded-full bg-[#FDE48D]">
              リクエスト中
            </p>
          </div>
        </div>
        <div className="w-full flex">
          <Button className="w-[185px] h-[30px] bg-[#4291EF] mx-auto mt-[40px] mb-[71px]">
            <p className="text-[#FFFFFF] text-[20px]">アップデート</p>
            <Image width={28} height={28} src="/icons/icon-store.png" alt="" />
          </Button>
        </div>
      </section>
    </div>
  );
}
