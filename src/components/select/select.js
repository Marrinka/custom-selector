import { useState, useRef, useEffect } from 'react';

import './select.css';

const Select = ({legend, options}) => {

    const [chosenOption, chooseOption] = useState(legend);
    const [searching, searchingOption] = useState(false);
    const [possibleOptions, filterOptions] = useState(options);
    const [inputValue, changeInputValue] = useState('');


    const onChooseOption = (option) => {
        chooseOption(option);
        changeInputValue(option);
    }

    const onFilterOptions = (term) => {
        let items = [...options];
        if (term.length === 0) {
            filterOptions(items);
        }
        else {
            filterOptions(items.filter(item => item.text.toLowerCase().indexOf(term.toLowerCase()) > -1));
        }
    }
    
    const onSearchingOption = () => {
        searchingOption(!searching);
    }

    
    const myRef = useRef(null);

    const clickOutside = (e) => {
        if (myRef.current && !myRef.current.contains(e.target)) {
          searchingOption(false);
        }
      };
    
    useEffect(() => {
        document.addEventListener('click', clickOutside, true);
    });
    

    return (
        <div className="container">
            <fieldset className={(chosenOption === legend && !searching) ? "offLegend" : ""}
                onClick={onSearchingOption}>
                <legend>{(chosenOption !== legend || searching) ? legend : ''}</legend>

                <div className={((chosenOption === legend || searching) ? "default" : "chosen") + ((searching) ? ' hidden' : '')}>{chosenOption}</div>

                <input type="text" 
                    className={'searchOption ' + ((!searching) ? 'hidden' : '')}
                    onChange={(e) => {onFilterOptions(e.target.value);
                    changeInputValue(e.target.value)}}
                    value={inputValue}/>

                <div className={"devider" + ((!searching) ? 'hidden' : '')}></div>
                
                {(searching) ? 
                (
                    <div className="optionsWrapper" ref={myRef}>
                        {possibleOptions.map(item => (
                            <div className={item.value + ' option '}
                                onClick={() => onChooseOption(item.text)}>{item.text}</div>
                        ))}
                    </div>
                ) : <div className="devider"></div>}
                
            </fieldset>
        </div>
        
    )

}

export default Select;
