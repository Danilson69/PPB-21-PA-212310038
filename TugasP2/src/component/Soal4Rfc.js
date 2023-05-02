import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';



const MyBio = {identity:{npm:212310015 ,firstname: "Danilson",middlename:"Daka",lastname:"Todawatu",},
            
educations:[{ id: 1, school: 'SDN CIAWI 02' },
{ id: 2, school: 'SMP ADVENT BOGOR' },
{ id: 3, school: 'SMA MARDI YUANA BOGOR' }],

mobile_phone: '082111525156',
email: '212310038@student.ibik.ac.id',
gender: 'M',
tall_body: 172,
weight_body: 80

}

const Soal4Rfc = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 1, padding: 10, width: 250 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyBio</Text>
                <Text style={{ fontWeight: 'bold' }}>Identity</Text>
                <Text>NPM : {MyBio.identity.npm}</Text>
                <Text>First Name : {MyBio.identity.firstname}</Text>
                <Text>Middle Name : {MyBio.identity.middlename}</Text>
                <Text>Last Name : {MyBio.identity.lastname}</Text>
                <Text style={{ fontWeight: 'bold' }}>Educations</Text>
                {MyBio.educations.map((education) => {
                    return (
                        <Text>{education.id}. {education.school}</Text>
                    )
                })}



                <Text style={{ fontWeight: 'bold' }}>Other</Text>
                <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
                <Text>Email : {MyBio.email}</Text>
                <Text>Gender : {MyBio.gender}</Text>
                <Text>Tall Body : {MyBio.tall_body}</Text>
                <Text>Weight Body : {MyBio.weight_body}</Text>
                <Text style={{ fontStyle: 'italic' , textAlign:'center'}}>RFC</Text>
            </View>
        </View>
    );
}

export default Soal4Rfc;