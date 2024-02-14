'use client';

import { ChangeEvent } from 'react';

import { BsSearch } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';

import useFocus from '@/hooks/use-focus';
import useHover from '@/hooks/use-hover';
import { queryState } from '@/states/query';
import {OpenAI} from "openai";
// import dotenv from 'dotenv';

console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default function SearchBar() {
  const [query, setQuery] = useRecoilState(queryState);
  const { ref: hoverRef, isHovering } = useHover<HTMLDivElement>();
  const { ref: focusRef, isFocusing } = useFocus<HTMLInputElement>();  

  // dotenv.config();
  // require('dotenv').config()


  const handleInputClear = () => {
    setQuery('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = async (event) => {
    console.log(":dsfsdf");
    if (event.key === 'Enter') {
      console.log('엔터 키가 눌렸습니다:');
      //엔터 키를 눌렀을 때 원하는 로직을 여기에 추가하세요.
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "타임스탬프 값으로  마이크로초나 나노초 단위는 계산이 안될까??" }],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion);
    }
  };

  return (
    <div
      ref={hoverRef}
      className="relative mx-auto w-[80%] max-w-[24rem] md:mx-0"
    >
      <BsSearch className=" absolute left-6 flex h-full items-center text-xl text-gray-400" />
      {query && (isHovering || isFocusing) && (
        <IoMdClose
          onClick={handleInputClear}
          className="absolute right-6 flex h-full items-center text-xl"
        />
      )}
      <input
        ref={focusRef}
        type="text"
        placeholder="Search posts"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={query}
        className={`w-full rounded-full border-[2px] border-gray-300 py-4 pl-14 pr-12 text-xl font-medium hover:border-red-500 focus:border-red-500 focus:bg-customGray-base focus:outline-none dark:border-gray-400 dark:bg-customGray-dark dark:focus:bg-customGray-light ${
          isHovering && 'border-red-500'
        }`}
      />
    </div>
  );
}
