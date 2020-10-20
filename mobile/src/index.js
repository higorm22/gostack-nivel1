import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then( response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Higor de Moraes'
        });

        const project = response.data;

        setProjects([...projects, project]);

    }    

    return (
        <>
            <StatusBar barStyle="light-contente" backgroundColor="#7159c1" />
            
            <SafeAreaView style = {style.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => projects.id}
                    renderItem={({item: project}) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />

                <TouchableOpacity 
                    activeOpacity={0.4} 
                    style={styles.button} 
                    onPress={handleAddProject} 
                >
                    <Text style={styles.project}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    project: {
        color: '#fff',
        fontSize: 30,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});