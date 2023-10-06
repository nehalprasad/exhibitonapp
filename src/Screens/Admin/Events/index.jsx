import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './style';

const ListEvents = [
  {
    id: 1,
    title: 'Mumbai',
    startDate: '2023-05-18',
    endDate: '2023-05-18',
    attendees: [
    ],
    backgroundColor: '#ffdcb2',
    titleColor: '#ff8c00',
  },
  {
    id: 2,
    title: 'Kolkata',
    startDate: '2023-05-19',
    endDate: '2023-05-19',
    attendees: [
    ],
    backgroundColor: '#bfdfdf',
    titleColor: '#008080',
  },
  {
    id: 3,
    title: 'Pune',
    startDate: '2023-05-19',
    endDate: '2023-05-19',
    attendees: [
    ],
    backgroundColor: '#e2caf8',
    titleColor: '#8a2be2',
  },
  {
    id: 4,
    title: 'Delhi',
    startDate: '2023-05-19',
    endDate: '2023-05-19',
    attendees: [
    ],
    backgroundColor: '#d8e4fa',
    titleColor: '#6495ed',
  },
];

const Events = ({}) => {
  const [appointments, setAppointments] = useState(ListEvents);

  const renderAppointmentCard = ({item}) => (
    <TouchableOpacity style={styles.eventContainer}>
      <Text style={styles.dateTitle}>{item.title}</Text>
      <View style={styles.datesCalendar}>
        <View>
          <Text style={styles.datesHead}>Start Date</Text>
          <Text style={styles.datesBody}>{item?.startDate}</Text>
        </View>
        <View>
          <Text style={styles.datesHead}>End Date</Text>
          <Text style={styles.datesBody}>{item?.endDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const searchFilter = item => {
    const query = item.toLowerCase();
    if (!!query) {
      const queryData = appointments?.filter((value, index) => {
        return value?.title?.toLowerCase()?.includes(query);
      });
      if (!!queryData) {
        setAppointments(queryData);
      }
    } else {
      setAppointments(ListEvents);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>List of Exhibition</Text>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            placeholder="Search"
            onChangeText={searchFilter}
            placeholderTextColor={'gray'}
            style={styles.inputField}
            selectionColor={'gray'}
            returnKeyType="search"
          />
        </View>
        {/* If events exist  */}
        {!!appointments && (
          <FlatList
            // contentContainerStyle={{
            //   height: height,
            // }}
            data={appointments}
            initialNumToRender={6}
            renderItem={renderAppointmentCard}
            keyExtractor={item => item.id.toString()}
          /> 
        )}
        {/* If events exist  */}

        {/* If there is no events */}
        {!appointments && (
          <Text style={styles.noEventsTitle}>No such events....</Text>
        )}
        {/* If there is no events */}
      </View>
    </SafeAreaView>
  );
};

export default Events;