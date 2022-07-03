import { queryDataAlt as queryData } from "../../assets/data/data1"
import { getTableColumns } from "../../assets/data/tableHelpers"

const ColumnDetails = () => {
  return (
    <div>
      <table>
        {getTableColumns(queryData)}
      </table>
    </div>
  )
}

export default ColumnDetails