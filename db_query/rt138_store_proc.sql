DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ffun_log_month_close`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `ffunlog_close`.`Valve_ID` AS `Valve_ID`,`ffunlog_close`.`Valve_name` AS `Valve_name`,sum(`ffunlog_close`.`Value`) AS `Value`,month(`ffunlog_close`.`Date_time`) AS `mnth` from `rt138`.`ffunlog_close` where `ffunlog_close`.`rig_id`= rigid and year(`ffunlog_close`.`Date_time`) = yr  group by `ffunlog_close`.`Valve_ID`,`ffunlog_close`.`Valve_name`, month(`ffunlog_close`.`Date_time`)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ffun_log_month_open`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `ffunlog_open`.`Valve_ID` AS `Valve_ID`,`ffunlog_open`.`Valve_name` AS `Valve_name`,sum(`ffunlog_open`.`Value`) AS `Value`,month(`ffunlog_open`.`Date_time`) AS `mnth` from `rt138`.`ffunlog_open` where `ffunlog_open`.`rig_id`= rigid and year(`ffunlog_open`.`Date_time`) = yr  group by `ffunlog_open`.`Valve_ID`,`ffunlog_open`.`Valve_name`, month(`ffunlog_open`.`Date_time`)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ffun_log_yr_close`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `ffunlog_close`.`Valve_ID` AS `Valve_ID`,`ffunlog_close`.`Valve_name` AS `Valve_name`,sum(`ffunlog_close`.`Value`) AS `Value` from `rt138`.`ffunlog_close` WHERE `ffunlog_close`.`rig_id`=rigid and year(`ffunlog_close`.`date_time`)=yr  group by `ffunlog_close`.`Valve_name`,`ffunlog_close`.`Valve_ID`$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ffun_log_yr_open`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `ffunlog_open`.`Valve_ID` AS `Valve_ID`,`ffunlog_open`.`Valve_name` AS `Valve_name`,sum(`ffunlog_open`.`Value`) AS `Value` from `rt138`.`ffunlog_open` WHERE `ffunlog_open`.`rig_id`=rigid and year(`ffunlog_open`.`date_time`)=yr  group by `ffunlog_open`.`Valve_name`,`ffunlog_open`.`Valve_ID`$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `fun_log_month_close`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `funlog_close`.`Valve_ID` AS `Valve_ID`,`funlog_close`.`Valve_name` AS `Valve_name`,sum(`funlog_close`.`Value`) AS `Value`,month(`funlog_close`.`Date_time`) AS `mnth` from `rt138`.`funlog_close` where `funlog_close`.`rig_id`= rigid and year(`funlog_close`.`Date_time`) = yr  group by `funlog_close`.`Valve_ID`,`funlog_close`.`Valve_name`, month(`funlog_close`.`Date_time`)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `fun_log_month_open`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `funlog_open`.`Valve_ID` AS `Valve_ID`,`funlog_open`.`Valve_name` AS `Valve_name`,sum(`funlog_open`.`Value`) AS `Value`,month(`funlog_open`.`Date_time`) AS `mnth` from `rt138`.`funlog_open` where `funlog_open`.`rig_id`= rigid and year(`funlog_open`.`Date_time`) = yr  group by `funlog_open`.`Valve_ID`,`funlog_open`.`Valve_name`, month(`funlog_open`.`Date_time`)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `fun_log_yr_close`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `funlog_close`.`Valve_ID` AS `Valve_ID`,`funlog_close`.`Valve_name` AS `Valve_name`,sum(`funlog_close`.`Value`) AS `Value` from `rt138`.`funlog_close` WHERE `funlog_close`.`rig_id`=rigid and year(`funlog_close`.`date_time`)=yr  group by `funlog_close`.`Valve_name`,`funlog_close`.`Valve_ID`$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `fun_log_yr_open`(IN `rigid` INT, IN `yr` INT)
    NO SQL
select `funlog_open`.`Valve_ID` AS `Valve_ID`,`funlog_open`.`Valve_name` AS `Valve_name`,sum(`funlog_open`.`Value`) AS `Value` from `rt138`.`funlog_open` WHERE `funlog_open`.`rig_id`=rigid and year(`funlog_open`.`date_time`)=yr  group by `funlog_open`.`Valve_name`,`funlog_open`.`Valve_ID`$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `miss_log_clm`(in rid int,ls_id int,yyr int,mnth int)
SELECT rig_id,loss_id,day(date_time) as 'plt_dys',month(date_time) as 'plt_month',sum(loss_value) as 'lss_tot' FROM miscellaneous_data where rig_id=rid and loss_id=ls_id and year(date_time)=yyr and month(date_time)=mnth group by day(date_time)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `miss_log_sct`(in rid int,ls_id int,yyr int,mnth int)
select * from miscellaneous_data where rig_id=rid and loss_value=1 and loss_id=ls_id and year(date_time)=yyr and month(date_time)=mnth$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pmp_chart`(in yr int,rid int)
select rig_id,pump_id,sum(value) as 'plot_value',error_id from pmp_alm where rig_id=rid and year(date_time)=yr group by pump_id,error_id$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `slog_chart`(in yr int,rid int)
select rig_id,count(shutdown_id) as 'stlog_value',shutdown_id from shutdwn_log_chart where rig_id=rid and year(date_time)=yr group by shutdown_id$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_bop_ptrend`(in r_id int,in frmdt int,in todt int,in itrvl int)
SELECT sr_no,press_id,pressure,date_time FROM rt138.ptrend where press_id in(1,2,3,7) and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) and sr_no mod itrvl=0  order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_chk_ptrend`(in r_id int,in frmdt int,in todt int,in itrvl int)
SELECT sr_no,press_id,pressure,date_time FROM rt138.ptrend where press_id in(4,6) and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) and sr_no mod itrvl=0  order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_count_bop_ptrend`(in r_id int,in frmdt int,in todt int)
SELECT sr_no,press_id,pressure,date_time FROM rt138.ptrend where press_id in(1,2,3,7) and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_count_chk_ptrend`(in r_id int,in frmdt int,in todt int)
SELECT sr_no,press_id,pressure,date_time FROM rt138.ptrend where press_id in(4,6) and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_rsp_ann_chart`(in p_id int,in r_id int,in frmdt int,in todt int)
select sr_no,rig_id,press_id,pressure,date_time from ptrend where press_id=p_id and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_rsp_mani_chart`(in p_id int,in r_id int,in frmdt int,in todt int)
select sr_no,rig_id,press_id,pressure,date_time from ptrend where press_id=p_id and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) order by date_time asc$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_rsp_shr_chart`(in p_id int,in r_id int,in frmdt int,in todt int)
select sr_no,rig_id,press_id,pressure,date_time from ptrend where press_id=p_id and rig_id=r_id and date_time>=FROM_UNIXTIME(frmdt) and date_time<=FROM_UNIXTIME(todt) order by date_time asc$$
DELIMITER ;
