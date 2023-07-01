import React from 'react';
import { Button, Col, DatePicker, Grid, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import classes from '@/css/Card.module.scss';
import dayjs from 'dayjs';
import { ButtonProps } from 'antd/es/button/button';
import { RangePickerProps as BaseRangePickerProps } from 'antd/es/date-picker/generatePicker';

const { useBreakpoint } = Grid;
const dateFormat = 'DD.MM.YYYY';
type Dates = [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
const { RangePicker } = DatePicker;
interface CardProps {
  buttonClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  rangeClassName?: string;
  buttonProps?: ButtonProps;
  rangeProps?: BaseRangePickerProps<dayjs.Dayjs>;
}
const Card: React.FC<CardProps> = (props) => {
  const {
    containerClassName,
    descriptionClassName,
    titleClassName,
    buttonClassName,
    rangeClassName,
    buttonProps,
    rangeProps,
  } = props;
  const screens = useBreakpoint();
  const { t } = useTranslation();
  const breakpoints = Object.entries(screens);
  const [range, setRange] = React.useState<Dates>();
  const onChangeRange = (dates: Dates, dateStrings: [string, string]) => {
    setRange(dates);
  };
  return (
    <div className={containerClassName ?? classes.container}>
      <Row justify='start'>
        <Col span={14} className={classes.column}>
          <p className={titleClassName ?? classes.title}>{t('title')}</p>
        </Col>
      </Row>
      <Row justify='start'>
        <Col span={22} className={classes.column}>
          <p className={descriptionClassName ?? classes.description}>{t('description')}</p>
        </Col>
        <Col span={12} xl={14} md={24} xs={24} className={classes.column}>
          <RangePicker
            className={rangeClassName ?? classes.range}
            value={range}
            onChange={onChangeRange}
            format={dateFormat}
            placeholder={[t('dateStart'), t('dateEnd')]}
            {...rangeProps}
          />
        </Col>
        <Col span={6} xl={8} md={24} xs={24} className={classes.column}>
          <Button
            className={buttonClassName ?? classes.button}
            {...buttonProps}
          >
            {t('button')}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
