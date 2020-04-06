import * as Types from "../types/index";
import callAPI from "../../utils/callApi";
import * as URL from "../../constants/config.api";


const thongTinChuyenXe=(thongTinChuyenXe)=>({
    type: Types.TIM_CHUYENXE,
    thongTinChuyenXe
})

export const thongTinChuyenXe_request=(tuyenDuong,ngayDi)=>{
    return dispatch=>{
        return callAPI('POST',URL.POST_TIMCHUYENXE,{
            tuyenDuong,ngayDi
        }).then(res=>{
            dispatch(thongTinChuyenXe(res.data))
          
        }).catch(err=>console.log(err))
    }
}