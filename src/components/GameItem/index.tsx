import formatPrice from '@/utils/formatPrice';
import { Download } from '@styled-icons/boxicons-solid';
import * as S from './styles';

type PaymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  img: string;
  title: string;
  price: number;
  downloadLink?: string;
  paymentInfo?: PaymentInfoProps;
};

const GameItem: React.FC<GameItemProps> = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{formatPrice(price)}</S.Price>
      </S.Content>
    </S.GameContent>
    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
);

export default GameItem;
