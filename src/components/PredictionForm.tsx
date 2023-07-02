import {observer} from "mobx-react-lite";
import {useStore} from "../store/store";
import {predict} from "../queries";

export const PredictionForm = observer(() => {
    const { globalSettings, globalEnvData } = useStore();
    const setPrediction = (e) => {
        globalEnvData.predictionData[e.target.name] = e.target.value
        console.log(globalEnvData.predictionData)
    }
    const changeRes = async (e) => {
        e.preventDefault()
        let resp = await predict(globalEnvData.predictionData);
        globalSettings.showPredictionForm = true;
        globalSettings.predictionRes = resp.data.data;
        globalSettings.showPredictionRes = true;
    }

    return (
        <div style={{position:'absolute',height:'100%',width:500 + 'px', zIndex:999,top:'10%',padding:20 +'px',right:45 + '%'}} className='bg-white'>
            <form onSubmit={changeRes}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="">Фиксированная кислотность</label>
                        <input type='text' required={true}  name={'fixed_acidity'} onChange={setPrediction}   className="form-control" id="inputName1" placeholder="Фиксированная кислотность"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputName2">Летучая кислота</label>
                        <input type='text' required={true} name={'volatile_acidity'} onChange={setPrediction}   className="form-control" id="inputName2" placeholder="Летучая кислота"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Лимонная кислота</label>
                        <input type='text' required={true} name={'citric_acid'} onChange={setPrediction} className="form-control" id="inputEmail1" placeholder="Лимонная кислота"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Остаточный сахар</label>
                        <input type='text' required={true} name={'residual_sugar'} onChange={setPrediction} className="form-control" id="inputPhone" placeholder="Остаточный сахар"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Хлорид</label>
                        <input type='text' required={true} name={'chlorides'} onChange={setPrediction} className="form-control" id="inputEmail1" placeholder="Хлорид"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Свободный диоксид</label>
                        <input type='text' required={true} name={'free_sulfur_dioxide'} onChange={setPrediction} className="form-control" id="inputPhone" placeholder="Свободный диоксид"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Суммарный диоксид</label>
                        <input type='text' required={true} name={'total_sulfur_dioxide'} onChange={setPrediction} className="form-control" id="inputEmail1" placeholder="Плотность"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Плотность</label>
                        <input type='text' required={true} name={'density'} onChange={setPrediction} className="form-control" id="inputPhone" placeholder="Водородный показатель"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Водородный показатель</label>
                        <input type='text' required={true} name={'pH'} onChange={setPrediction} className="form-control" id="inputEmail1" placeholder="Водородный показатель"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Сульфаты</label>
                        <input type='text' required={true} name={'sulphates'} onChange={setPrediction} className="form-control" id="inputPhone" placeholder="Сульфаты"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputEmail1">Алкоголь</label>
                        <input type='text' required={true} name={'alcohol'} onChange={setPrediction} className="form-control" id="inputEmail1" placeholder="alcohol"/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="inputPhone">Цвет Вина</label>
                        <input type='text' required={true} name={'winecolor'} onChange={setPrediction} className="form-control" id="inputPhone" placeholder="Цвет вина"/>
                    </div>
                </div>
                <button  className="btn btn-primary" type="submit" >Предсказать</button>

                {globalSettings.showPredictionRes && <h3> Предположительное качество вина:<strong style={{color:'red'}}>{globalSettings.predictionRes}</strong></h3>}


            </form>

        </div>

)
})