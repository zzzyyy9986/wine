import {useStore} from "../store/store";

export const MenuTabs = () => {
    const { globalEnvData,globalSettings } = useStore();

    const openPredictionForm = () => {
        globalSettings.showPredictionForm = true;
    }
    return (
        <ul style={{position:'absolute',zIndex:999,right:50 +'%',top:2 +'%'}} className="list-group list-group-horizontal">
            <li className="list-group-item bg-info">Trello</li>
            <li className="list-group-item bg-warning" onClick={(e) => {
            openPredictionForm()}}>Предсказание</li>
        </ul>
    )
}