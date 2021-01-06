import cx from 'clsx';
import './Loading.css';

type Props = {
  isGlobal?: boolean;
};

export const Loading = ({ isGlobal }: Props): JSX.Element => {
  return <div className={cx('loading', { 'loading--global': isGlobal })}>Loading...</div>;
};
