import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry";
import './people-page.css';
import ItemDetails from "../item-details/item-details";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };




    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople}>

                {(item) => (
                    `${item.name} (${item.birthYear})`
                )}
                
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson} />
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails} />
        );
    };
}