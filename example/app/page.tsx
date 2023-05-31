"use client";
import './globals.css'
import React from 'react';
import { useState } from 'react';
import { Tag } from 'antd';
import { DataSourceItem, TextAreaAutocomplete, InlineAutocomplete } from 'react-inline-autocomplete/dist';
import 'react-inline-autocomplete/dist/index.css';

export default function Home(): JSX.Element {
  const dataSource: DataSourceItem[] = [
    {
      text: 'Amazon',
      value: 'Amazon',
    },
    {
      text: 'Google',
      value: 'Google',
    },
    {
      text: 'Google Search',
      value: 'GoogleSearch',
    },
    {
      text: 'Apple',
      value: 'Apple',
    },
    {
      text: 'Apple Pencil',
      value: 'ApplePencil',
    },
    {
      text: 'Apple Watch',
      value: 'AppleWatch',
    },
    {
      text: 'Apple Power',
      value: 'ApplePower',
    },
  ].map((i) =>
    Object.assign(i, {
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
    })
  );

  const [timelineList, setTimelineList] = useState<
    {
      value: string;
      event: string;
    }[]
  >([]);
  const ref = React.createRef<HTMLTextAreaElement>();
  const nref = React.createRef<HTMLInputElement>();

  const focus = () => {
    ref.current!.focus();
  };

  const addTimelineItem = (item: { value: string; event: string }) => {
    setTimelineList((prevList) => [item].concat(prevList));
  };

  const onChange = (value: string) => {
    addTimelineItem({
      value,
      event: 'Change',
    });
  };

  const onPressEnter = (value: string) => {
    addTimelineItem({
      value,
      event: 'PressEnter',
    });
  };

  const onSelect = (item: DataSourceItem) => {
    addTimelineItem({
      value: item.text,
      event: 'Select',
    });
  };

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className='mb-5'>
          {dataSource.map((i, idx) => (
            <Tag key={idx} color={i.color}>
              {i.text}
            </Tag>
          ))}
        </div>
        <div className='mb-5'>
          <TextAreaAutocomplete
            ref={ref}
            className="min-w-full"
            dataSource={dataSource}
            caseSensitive={false}
            onChange={onChange}
            onSelect={onSelect}
            onPressEnter={onPressEnter}
          ></TextAreaAutocomplete>
        </div>
        <InlineAutocomplete
          ref={nref}
          className="min-w-full"
          dataSource={dataSource}
          caseSensitive={false}
          onChange={onChange}
          onSelect={onSelect}
          onPressEnter={onPressEnter}
        ></InlineAutocomplete>
      </section>
    </main>
  )
}
