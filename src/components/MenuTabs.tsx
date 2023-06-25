import {useStore} from "../store/store";

export const MenuTabs = () => {
    const { globalEnvData,globalSettings } = useStore();

    const openTrello = ()=> {
        window.open('https://trello.com/invite/b/2dYiItla/ATTI27d2cf321997b6f03fce72e0c5c653e2092CA72D/стратегическое-развитие ', '_blank').focus();
    }

    const openPredictionForm = () => {
        globalSettings.showPredictionForm = true;
    }
    return (
        <ul style={{position:'absolute',zIndex:999,right:50 +'%',top:2 +'%'}} className="list-group list-group-horizontal">
            <li className="list-group-item bg-info" onClick={openTrello}>Trello</li>
            <li className="list-group-item bg-warning" onClick={(e) => {
            openPredictionForm()}}>Предсказание</li>
        </ul>
    )
}