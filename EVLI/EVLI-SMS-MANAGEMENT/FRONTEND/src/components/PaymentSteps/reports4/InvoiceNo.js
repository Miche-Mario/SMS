import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  const InvoiceNo = ({studentData}) => (
        <Fragment>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Invoice No:</Text>
                <Text style={styles.invoiceDate}>{studentData.invoicedata.invoicecode}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{+day + "/" + month + "/" + year}</Text>
            </View >
        </Fragment>
  );
  
  export default InvoiceNo