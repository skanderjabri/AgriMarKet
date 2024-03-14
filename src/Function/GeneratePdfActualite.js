import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import Url from '../util/Url';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,

    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image: {
        width: '30%',
        marginBottom: 10,
        marginHorizontal: 150,

    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    titre: {
        fontSize: 20,
        fontFamily: 'Oswald',
        color: '#3cb815',
        fontWeight: 'bold',
        marginBottom: 20,

    },
    description: {
        fontSize: 15,
        fontFamily: 'Oswald',
        color: 'black',
        textAlign: 'justify'
    }
});

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
var height = window.innerHeight - 100;
var width = window.innerWidth - 50;

const MyDocument = ({ titre, image, description }) => {
    var source = `${Url.BaseFile}/actualites/${image}`;
    console.log(source)
    return (
        <PDFViewer width={width} height={height}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Image style={styles.image} src="../assets/img/Logo.png" />
                        <Text style={styles.titre}>{titre}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )}
                        fixed />
                </Page>
            </Document>
        </PDFViewer>
    )
};

export default MyDocument;
