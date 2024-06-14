import {Text, View} from 'react-native';
import {useEmployeeDetail} from '../../../hooks';

export default function EmployeeDetailScreen() {
  const employeeListReq = useEmployeeDetail(3);

  const item = employeeListReq.data;

  return (
    <View>
      <Text style={{color: '#333'}}>{item?.first_name}</Text>
      <Text style={{color: '#333'}}>{item?.last_name}</Text>
      <Text style={{color: '#333'}}>{item?.company_name}</Text>
      <Text style={{color: '#333'}}>{item?.address}</Text>
      <Text style={{color: '#333'}}>{item?.city}</Text>
      <Text style={{color: '#333'}}>{item?.county}</Text>
      <Text style={{color: '#333'}}>{item?.state}</Text>
      <Text style={{color: '#333'}}>{item?.zip}</Text>
      <Text style={{color: '#333'}}>{item?.phone1}</Text>
      <Text style={{color: '#333'}}>{item?.phone2}</Text>
      <Text style={{color: '#333'}}>{item?.email}</Text>
      <Text style={{color: '#333'}}>{item?.web}</Text>
    </View>
  );
}
