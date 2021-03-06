import classnames from 'classnames';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { Link } from 'core/components/Router';

import style from './menu.less';

export interface IProps {
  href: string;
  text: string;
  as?: string;
}

const Tab: FC<IProps> = ({ href, text, as }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href} as={as}>
      <a
        className={classnames(style.tab, {
          [style.active]: isActive,
        })}
      >
        <p>{text}</p>
      </a>
    </Link>
  );
};

export default Tab;
