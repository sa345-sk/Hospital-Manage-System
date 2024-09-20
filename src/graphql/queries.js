import {gql} from '@apollo/client'
export const staffQuery = gql`
  query{
    staff {
        id,
        firstName,
        secondName,
        dateEmployed
        gender,
        phone,
        email,
        age
    }
  }
`

export const scheduleQuery = gql`
  query {
    schedules {
      id,
      title,
      date,
      time
    }
  }
`
export const inventoryQuery = gql`
  query {
    inventories {
      id,
      item,
      price,
      quantity,
      amount
    }
  }
`
export const pateintsQuery = gql`
  query{
    pateints {
      id,
      firstName,
      secondName,
      date,
      diagnosis,
      email,
      phone,
      gender
    }
  }
`
export const staffMutationQuery = gql`
  mutation AddStaff($staff: AddStaffInput!){
    addStaff(staff: $staff) {
      firstName,
      secondName,
      dateEmployed,
      gender,
      phone,
      email,
      age
    }
  }
`
export const inventoryMutationQuery = gql`
  mutation AddInventory($inventory: AddInventoryInput!){
    addInventory(inventory: $inventory) {
      item,
      price,
      quantity,
      amount
    }
  }
`
export const scheduleMutationQuery = gql`
  mutation AddSchedule($schedule: AddScheduleInput!){
    addSchedule(schedule: $schedule) {
      title,
      date,
      time
    }
  }
`
export const pateintsMutationQuery = gql`
  mutation AddPateint($pateint: AddPateintInput!){
    addPateint(pateint: $pateint) {
      firstName,
      secondName,
      date,
      diagnosis,
      email,
      phone,
      gender
    }
  }
`
export const pateintDeleteQuery = gql`
   mutation DeletePateint($id: ID!) {
    deletePateint(id: $id){
      id,
      firstName,
      secondName,
      date,
      diagnosis,
      email,
      phone,
      gender
    }
   }
`
export const StaffDeleteQuery = gql`
   mutation DeleteStaff($id: ID!) {
    deleteStaff(id: $id){
      id,
      firstName,
      secondName,
      dateEmployed,
      gender,
      phone,
      email,
      age
    }
   }
`
export const InventoryDeleteQuery = gql`
   mutation DeleteInventory($id: ID!) {
    deleteInventory(id: $id){
      item,
      price,
      quantity,
      amount
    }
   }
`
export const ScheduleDeleteQuery = gql`
   mutation DeleteSchedule($id: ID!) {
    deleteSchedule(id: $id){
      title,
      date,
      time
    }
   }
`