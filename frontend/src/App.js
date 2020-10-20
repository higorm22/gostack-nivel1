import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState ([]);

    useEffect(() => {
        api.get('projects').then(response =>{
            setProjects(response.data);

            //console.log(response);
        })
    },[]);

    async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);

        //setProjects([...projects, `Novo Projeto ${Date.now()}` ]);

        const response = await api.post('projects',{
            title:`Novo Projeto ${Date.now()}`,
            owner: "Higor de Moraes"
        })

        const project = response.data;

        setProjects([...projects, project]);

        //console.log(projects);
    }

    return (
    <>
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Add Projeto</button>
    </>
    )
}

export default App;