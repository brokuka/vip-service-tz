import { useAppSelector } from "../../hooks";
import { selectInfo } from "../../store/slices/infoSlice";
import { selectData } from "../../store/slices/searchSlice";
import Card from "../Card";
import CardPrice from "../Card/CardPrice";

const Info: React.FC = (): JSX.Element => {
  const { toDate, to, where, whereDate } = useAppSelector(selectData);
  const info = useAppSelector(selectInfo);

  return (
    <div className="info">
      <div className="card-group">
        <Card>
          <Card.Badge label="Невозвратный" />
          <Card.Plate>
            <Card.Logo />
            <Card.Info
              toDate={toDate}
              to={to}
              where={where}
              whereDate={whereDate}
              {...info}
            />
          </Card.Plate>
        </Card>

        {toDate && (
          <Card>
            <Card.Badge label="Невозвратный" />
            <Card.Plate>
              <Card.Logo />
              <Card.Info
                toDate={whereDate}
                to={where}
                where={to}
                whereDate={toDate}
                {...info}
              />
            </Card.Plate>
          </Card>
        )}
      </div>

      <CardPrice />
    </div>
  );
};

export default Info;
