import { GiftItem } from '@/features/EditGiftForm';
import styles from './GiftList.module.css';
import { useGetGiftsQuery } from '@/app/provider/giftsApi';

export const GiftList = () => {
  const { data: gifts, isLoading, isError } = useGetGiftsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading gifts</div>;

  return (
    <div className={styles.giftList}>
      {gifts?.map((gift) => (
        <GiftItem key={gift.id} {...gift} />
      ))}
    </div>
  );
};