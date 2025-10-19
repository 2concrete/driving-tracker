type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type DrivingLogEntry = {
  startTime: string;
  finishTime: string;
  date: string;
  supervisor: Supervisor;
};

type DrivingLogListProps = {
  drivingLog: DrivingLogEntry[];
};

const DrivingLogList = ({ drivingLog }: DrivingLogListProps) => {
  return <div></div>;
};

export default DrivingLogList;
