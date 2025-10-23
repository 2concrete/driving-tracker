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

const DrivingLogList = ({}: DrivingLogListProps) => {
  return (
    <div className="border-1 border-neutral-400 h-100 rounded shadow-xl"></div>
  );
};

export default DrivingLogList;
