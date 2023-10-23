import { DataTypes, Model } from 'sequelize'
import { connectDB } from '../config/dbConfig'
import { CalendarInterface } from '../interfaces/calendar.interface'

interface CalendarModel extends Model, CalendarInterface { }

const Calendar = connectDB.define<CalendarModel>('Calendar',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    htmlLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: false,
  }
)


export default Calendar