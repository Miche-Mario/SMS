import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#bff0fd',
  },
  header: {
    marginTop: 24,
  }
});

const InvoiceItemsTable = ({ studentData }) => (
  <View>
    <View style={styles.header}>
      <View style={{display: "flex", flexDirection: "row"}}>
        <View>
          <Text>Receive from:</Text>
        </View>
        <View style={{marginLeft: "2%", }}>
          <Text style={{textTransform: "uppercase", fontSize: 10}}>{studentData &&  studentData.surnameg} {studentData && studentData.forenamesg}</Text>
        </View>
      </View>
      <View style={{ width: "70%" }}>
        <View style={{ paddingLeft: 5, flexDirection: 'row', marginLeft: "15%" }}>
          <Text style={{ marginRight: 2, fontSize: 9 }}>COURSES:</Text>
          <Text style={{ marginLeft: 5, fontSize: 8, textTransform: 'lowercase' }}>{studentData && studentData.courseList.length >= 1 && studentData.courseList[0].laduration} Months of Eglish
            {studentData && studentData.courseList.length > 1 && " + " + studentData.courseList[1].lecoursename}</Text>
        </View>
        <View style={{ paddingLeft: 5, flexDirection: 'row', marginLeft: "15%" }}>
          <Text style={{ marginRight: 2, fontSize: 9 }}>PURCHASES:</Text>
          <Text style={{ marginLeft: 5, fontSize: 8 }}>{studentData && studentData.purchaseList.length > 0 && studentData.purchaseList.map(objet => objet.purchasedescription).join(' + ')}</Text>
        </View>
        <View style={{ paddingLeft: 5, flexDirection: 'row', marginLeft: "15%" }}>
          <Text style={{ marginRight: 2, fontSize: 9 }}>ACCOMMODATIONS:</Text>
          <Text style={{ marginLeft: 5, fontSize: 8 }}>{studentData && studentData.accoList.length > 0 && studentData.accoList.map(objet => objet.lacconame).join(' + ')}</Text>
        </View>
      </View>
      
    </View>
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={studentData} />
      <InvoiceTableBlankSpace rowsCount={0} />
      <InvoiceTableFooter items={studentData} />
    </View>
  </View>
);

export default InvoiceItemsTable