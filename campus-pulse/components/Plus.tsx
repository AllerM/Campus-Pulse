import { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
// Import the Supabase client from supabaseClient.js
import { supabase } from '@/supabase';
import MapView, { Marker, } from 'react-native-maps';



const styles = StyleSheet.create({
    plus: {
        height: 80,
        width: 80,
        position: 'absolute',
        bottom: 60,
        backgroundColor: '#EC34EF',
        borderRadius: 100,
        
    },
    plusMenu: {
        height: 80,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        position: "absolute",
        bottom: 150,
        gap: 12,
        paddingTop: 15,
        alignItems: 'center',
    },
    plusMenuItems: {

    },
    createNewEventMenu: {
        height: 700,
        width: 350,
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 20,
        alignItems: 'center',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    menuHeading: {
        fontWeight: 'bold',
        fontSize: 30
    },
    backButton: {
        height: 30,
        width: 30,
        backgroundColor: 'gray',
        borderRadius: 100,
        position: 'absolute',
        top: 20,
        right: 300
    },
    nameInput: {
        height: 40,
        width: 300,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 7,
        top: 15,
        paddingLeft: 10,
        
    },
    timeInput: {
        height: 40,
        width: 150,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 7,
        top: 15,
        paddingLeft: 10,
        
    },
    times: {
        display: 'flex',
        flexDirection: 'row'
        
    },
    submitButton: {
        top: 50,
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 10
    },
    description: {
        height: 150,
        width: 300,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 7,
        top: 15,
        paddingLeft: 10,
    },
    invite: {
        height: 75,
        width: 300,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 7,
        top: 15,
        paddingLeft: 10,
    }
})

export default function Plus() {
    const [plusMenuVisible, setPlusMenuVisible] = useState(false);
    const [createNewEventMenuVisible, setCreateNewEventMenuVisible] = useState(false);
    const [pinDropMenuVisible, setPinDropMenuVisible] = useState(false)

    const [nameOfEvent, setNameOfEvent] = useState('');
    const [hostingGroupOfEvent, setHostingGroupOfEvent] = useState<string | undefined>('');
    const [hostingUserOfEvent, setHostingUserOfEvent] = useState<string | undefined>('');
    const [invitedGroupsOfEvent, setInvitedGroupsOfEvent] = useState('');
    const [invitedUsersOfEvent, setInvitedUsersOfEvent] = useState('');
    const [descriptionOfEvent, setDescriptionOfEvent] = useState('');
    const [dateOfEvent, setDateOfEvent] = useState('');
    const [startTimeOfEvent, setStartTimeOfEvent] = useState('');
    const [endTimeOfEvent, setEndTimeOfEvent] = useState('');

   

    const showMenu = () => {
        setPlusMenuVisible(!plusMenuVisible);
    }

    const showCreateNewEventMenu = () => {
        setCreateNewEventMenuVisible(true);
    }

    const handleBackButton = () => {
        setPlusMenuVisible(false);
        setCreateNewEventMenuVisible(false);

    }

    const handleSubmit = async (event: any) => {
        event?.preventDefault();

        const { data, error } = await supabase.from(
            'events'
        ).insert({
            event_id: '777',
            name: nameOfEvent,
            description: descriptionOfEvent,
            startTime: startTimeOfEvent,
            endTime: endTimeOfEvent,
            date: dateOfEvent,
            host_id: '99'
        }).select();

        if (error) {
            console.error(error);
            return
        }

        setCreateNewEventMenuVisible(false);
        setPinDropMenuVisible(true);
    }

    return (
        <>
            <TouchableOpacity 
                style={styles.plus}
                onPress={showMenu}
            >
                <Text>+</Text>
            </TouchableOpacity>
            {plusMenuVisible && 
                (<View style={styles.plusMenu} >
                    <TouchableOpacity 
                        style={styles.plusMenuItems}
                        onPress={showCreateNewEventMenu}
                    >
                        <Text>
                            Create New Event
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plusMenuItems}>
                        <Text>
                            Create New Group
                        </Text>
                    </TouchableOpacity>
                </View>)
            }
            {createNewEventMenuVisible && 
                (<View style={styles.createNewEventMenu}>
                    <Text style={styles.menuHeading}>Create an Event</Text>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleBackButton}
                    >
                        <Text>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.nameInput}
                        placeholder='Name of Event'
                        placeholderTextColor='gray'
                        onChangeText={setNameOfEvent}
                        value={nameOfEvent}
                    >

                    </TextInput>
                    <TextInput 
                        style={styles.nameInput}
                        placeholder='Hosting Group'
                        placeholderTextColor='gray'
                        onChangeText={setHostingGroupOfEvent}
                        value={hostingGroupOfEvent}
                    >
                    
                    

                    </TextInput>

                    <TextInput 
                        style={styles.nameInput}
                        placeholder='Date'
                        placeholderTextColor='gray'
                        onChangeText={setDateOfEvent}
                        value={dateOfEvent}
                    >
    
                    </TextInput>
                    <View style={styles.times}>
                        <TextInput 
                            style={styles.timeInput}
                            placeholder='Start Time'
                            placeholderTextColor='gray'
                            onChangeText={setStartTimeOfEvent}
                            value={startTimeOfEvent}
                        >
                            

                        </TextInput>
                        <TextInput 
                            style={styles.timeInput}
                            placeholder='End Time'
                            placeholderTextColor='gray'
                            onChangeText={setEndTimeOfEvent}
                            value={endTimeOfEvent}
                        >
                            

                        </TextInput>
                    </View>

                    <TextInput
                        style={styles.description}
                        placeholder='Description'
                        placeholderTextColor='gray'
                        onChangeText={setDescriptionOfEvent}
                        value={descriptionOfEvent}
                    >

                    </TextInput>

                    <TextInput
                        style={styles.invite}
                        placeholder='Invite Groups'
                        placeholderTextColor='gray'
                        onChangeText={setInvitedGroupsOfEvent}
                        value={invitedGroupsOfEvent}
                    ></TextInput>

                    <TextInput
                        style={styles.invite}
                        placeholder='Invite Users'
                        placeholderTextColor='gray'
                        onChangeText={setInvitedUsersOfEvent}
                        value={invitedUsersOfEvent}
                    ></TextInput>
                    <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={handleSubmit}>
                        <Text>Submit and Drop Pin</Text>
                    </TouchableOpacity>
                </View>)
            }

            {pinDropMenuVisible && (
                {/* FIXED MARKER */}
            )}
            
        </>
    );
}