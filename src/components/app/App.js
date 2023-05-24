import Select from "../select/select";

const App = () => {
    return (
        <Select legend="Основная отрасль" 
                options={[{value: 'foodIndustry', text:'Пищевая промышленность'},
                {value: 'lightIndustry', text:'Легкая промышленность'},
                {value: 'machineBuilding', text:'Машиностроение'},
                {value: 'buildingIndustry', text:'Строительная промышленность'},
                {value: 'heavyIndustry', text:'Тяжелая промышленность'}]}/>
    )
}

export default App;