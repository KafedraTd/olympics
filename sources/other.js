//   let table = document.querySelector('table');
//   let template = `
       
//   <tr>
//         <td class = "additionalList" colspan="40">ДОБАВОЧНЫЙ ЛИСТ</td>
//         </tr>
  
//         <tr>
//         <td colspan="21">31 Грузовые места и описание товаров</td>
//         <td colspan="5">32 Товар №</td>
//         <td colspan="14">33 Код товара
//           <a href="https://www.consultant.ru/cons/cgi/online.cgi?from=411576-54&req=doc&rnd=fhuoCA&base=LAW&n=405649#K6x5Q2TG6U1B4D1e1" target="_blank" class="grafaClass">
//             <ion-icon name="information-circle"></ion-icon>
//           </a>
//         </td>
//       </tr>
//       <tr>
//         <td colspan="21">
//         <div class="container">
//                 <div class="classification">
//                   <a href="pages/classificationOfPacking.html" target="_blank" class="grafaClass">
//                   УПАКОВКА<ion-icon name="information-circle"></ion-icon>
//                   </a>
//                 </div>
//                 <div class="classification">
//                   <a href="https://customs.gov.ru/registers/objects-intellectual-property" target="_blank" class="grafaClass">
//                   ТРОИС<ion-icon name="information-circle"></ion-icon>
//                   </a>
//                 </div>
//                 <div class="classification">
//                   <a href="https://www.consultant.ru/cons/cgi/online.cgi?req=doc&ts=4Pqu02Tbq9HYNuR1&cacheid=2686A8C0D51AC15B38033F9150A5E802&mode=splus&base=LAW&n=409905#4squ02TYSrF1Csp41" target="_blank" class="grafaClass">
//                   ОПИСАНИЕ+<ion-icon name="information-circle"></ion-icon>
//                   </a>
//                 </div>
//               </div>
//         </td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa32-1]" id = "gr32-1-${itemQty}"/></td>
//         <td colspan="3"><div class="question"> <input type="text" name="data[${itemQty}-grafa32-2]" maxlength="3" onchange="selit (this)" list="datalist322"/></td>
//           <datalist id = "datalist322">
//             <option value="МПО">Международное почтовое отправление</option>
//             <option value="ЭКГ">Экспресс-груз</option>
//           </datalist>
          
//         <td colspan="5"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-1]" id="gr33${itemQty}"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-2]" placeholder="М" maxlength="1"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-3]" placeholder="С" maxlength="1"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-4]" placeholder="П" maxlength="1"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-5]" placeholder="И" maxlength="1"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-6]" placeholder="О" maxlength="1"/></td>
//         <td colspan="3"><div class="question"> <input type="text" name="data[${itemQty}-grafa33-7]" placeholder="Код доп.ТИ" title="Код дополнительной таможенной информации"/></td>
//         <td><a href="pages/classificationOfDti.html" target="_blank" class="grafaClass">
//             <ion-icon name="information-circle"></ion-icon>
//           </a>
//         </td>    
//       </tr>
//       <tr>
//         <td colspan="26" rowspan="7"><textarea name="data[${itemQty}-grafa31]" id="gr31${itemQty}" cols="26" rows="10">1-</textarea></td>
//         <td colspan="5">34 Код страны происх.</td>
//         <td colspan="5">35 Вес брутто (кг)</td>
//         <td colspan="3">36 Преференция</td>
//         <td>
//               <a href="pages/classificationOfPref.html" target="_blank" class="grafaClass">
//                 <ion-icon name="information-circle"></ion-icon>
//               </a>
//             </td>
//       </tr>
//       <tr>
//         <td colspan="3"><div class="question"> <input type="text" name="data[${itemQty}-grafa34-1]" placeholder="A" list="countryCode"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa34-1]" placeholder="B"/></td>
//         <td colspan="5"><div class="number"> <input type="number" name="data[${itemQty}-grafa35]" onfocusout="rounding(this, 3)"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa36-1]"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa36-2]"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa36-3]"/></td>
//         <td colspan="1"><div class="question"> <input type="text" name="data[${itemQty}-grafa36-4]"/></td>
//       </tr>
//       <tr>
//         <td colspan="5">37 Процедура</td>
//         <td colspan="6">38 Вес нетто (кг)</td>
//         <td colspan="3">39 Квота</td>
//       </tr>
//       <tr>
//         <td colspan="3"><div class="question"> <input type="text" name="data[${itemQty}-grafa37-1]" list="procedureCode"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa37-2]" list="transactionCode"/></td>
//         <td colspan="3"><div class="number"> <input type="number" name="data[${itemQty}-grafa38-1]" onfocusout="rounding(this, 3)"/></td>
//         <td colspan="3"><div class="number"> <input type="number" name="data[${itemQty}-grafa38-2]" onfocusout="rounding(this, 3)"/></td>
//         <td colspan="3"><div class="question"> <input type="text" name="data[${itemQty}-grafa39]"/></td>
//       </tr>
//       <tr>
//         <td colspan="14">40 Общая декларация/Предшествующий документ</td>
//       </tr>
//       <tr>
//         <td colspan="14"><div class="question"> <input type="text" name="data[${itemQty}-grafa40]"/></td>
//       </tr>
//       <tr>
//         <td colspan="6">41 Дополнит.единицы</td>
//         <td colspan="6">42 Цена товара</td>
//         <td colspan="2">43 Код МОС</td>
//       </tr>
      
//       <tr>
//         <td colspan="10">44 Дополнит. информация/ Представл. Документы</td>
//         <td colspan="5">
//           <button type="button" class="docs-${itemQty}" id="grafa44t${itemQty}" onclick="orderDocs(this)">
//             <span class="buttonText">Построить записи</span>
//             <span class="buttonIcon">
//               <ion-icon name="chevron-down-circle"></ion-icon>
//             </span>
//           </button></td>
//         <td colspan="5">
//           <button type="button" class="docs-${itemQty}" id="grafa44t${itemQty}1" onclick="clearDocArray (this)">
//             <span class="buttonText">Очистить графу</span>
//             <span class="buttonIcon">
//               <ion-icon name="trash-bin"></ion-icon>
//             </span>
//           </button></td>
//         <td colspan="4">
//           <button type="button" class="docs-${itemQty}" id="grafa44t${itemQty}2" onclick="copyDocs (this)">
//             <span class="buttonText">Копировать из</span>
//             <span class="buttonIcon">
//               <ion-icon name="documents"></ion-icon>
//             </span>
//           </button></td>
//         <td colspan="2"><select class="itemNum" name="itemNum" id="itemNum${itemQty}">
//         </select></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa41]"/></td>
//         <td colspan="6"><div class="number"> <input type="number" name="data[${itemQty}-grafa42]" onfocusout="rounding(this, 2)"/></td>
//         <td><div class="question"> <input type="text" name="data[${itemQty}-grafa43-1]" maxlength="1"/></td>
//         <td><div class="question"> <input type="text" name="data[${itemQty}-grafa43-2]" maxlength="1"/></td>
//       </tr>

//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 1" name="data[${itemQty}-grafa44t1-1]" class="grafa44t${itemQty}" id="grafa44${itemQty}-1" onchange="selit (this)" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 7" name="data[${itemQty}-grafa44t1-7]" class="grafa44t${itemQty}" id="grafa44${itemQty}-7" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 13" name="data[${itemQty}-grafa44t1-13]" class="grafa44t${itemQty}" id="grafa44${itemQty}-13" list="documentCode"/></td>
//         <td colspan="2">Код ДИ</td>
//         <td colspan="8">45 Таможенная стоимость
//           <a href="pages/classificationOfIncoterms.html" target="_blank" class="grafaClass">
//             <ion-icon name="information-circle"></ion-icon>
//           </a>
//         </td>
//       </tr>
//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 2" name="data[${itemQty}-grafa44t1-2]" class="grafa44t${itemQty}" id="grafa44${itemQty}-2" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 8" name="data[${itemQty}-grafa44t1-8]" class="grafa44t${itemQty}" id="grafa44${itemQty}-8" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 14" name="data[${itemQty}-grafa44t1-14]" class="grafa44t${itemQty}" id="grafa44${itemQty}-14" list="documentCode"/></td>
//         <td colspan="2"><div class="question"> <input type="text"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa45]" onfocusout="rounding(this, 2)"/></td>
//       </tr>
//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 3" name="data[${itemQty}-grafa44t1-3]" class="grafa44t${itemQty}" id="grafa44${itemQty}-3" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 9" name="data[${itemQty}-grafa44t1-9]" class="grafa44t${itemQty}" id="grafa44${itemQty}-9" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 15" name="data[${itemQty}-grafa44t1-15]" class="grafa44t${itemQty}" id="grafa44${itemQty}-15" list="documentCode"/></td>
//         <td colspan="10">46 Статистическая стоимость</td>
//       </tr>
//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 4" name="data[${itemQty}-grafa44t1-4]" class="grafa44t${itemQty}" id="grafa44${itemQty}-4" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 10" name="data[${itemQty}-grafa44t1-10]" class="grafa44t${itemQty}" id="grafa44${itemQty}-10" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 16" name="data[${itemQty}-grafa44t1-16]" class="grafa44t${itemQty}" id="grafa44${itemQty}-16" list="documentCode"/></td>
//         <td colspan="10"><div class="number"> <input type="number" name="data[${itemQty}-grafa46]" onfocusout="rounding(this, 2)"/></td>  
//       </tr>
//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 5" name="data[${itemQty}-grafa44t1-5]" class="grafa44t${itemQty}" id="grafa44${itemQty}-5" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 11" name="data[${itemQty}-grafa44t1-11]" class="grafa44t${itemQty}" id="grafa44${itemQty}-11" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 17" name="data[${itemQty}-grafa44t1-17]" class="grafa44t${itemQty}" id="grafa44${itemQty}-17" list="documentCode"/></td>
//         <td colspan="5" rowspan="2"> 
//           <button type="button" name="addNewGoods" onclick="addingNewGoods ()">
//             <span class="buttonText">Добавить товар № ${itemQty + 1}</span>
//             <span class="buttonIcon"><ion-icon name="add-circle"></ion-icon></span>
//           </button></td>
//         <td colspan="5" rowspan="2">
//           <button type="button" name="remNewGoods" onclick="removingNewGoods ()">
//             <span class="buttonText">Удалить товар № ${itemQty}</span>
//             <span class="buttonIcon"><ion-icon name="remove-circle"></ion-icon></span>
//           </button></td>
//       </tr>
//       <tr>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 6" name="data[${itemQty}-grafa44t1-6]" class="grafa44t${itemQty}" id="grafa44${itemQty}-6" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 12" name="data[${itemQty}-grafa44t1-12]" class="grafa44t${itemQty}" id="grafa44${itemQty}-12" list="documentCode"/></td>
//         <td colspan="10"><div class="leftQuestion"> <input type="text" placeholder="Документ 18" name="data[${itemQty}-grafa44t1-18]" class="grafa44t${itemQty}" id="grafa44${itemQty}-18" list="documentCode"/></td>
//       </tr>

//       <tr>
//         <td colspan="10">47 Исчисление платежей</td>
//         <td colspan="5">
//           <button class="duty-${itemQty}" onclick="orderDuty (this)">
//             <span class="buttonText">Построить записи по т.${itemQty}</span>
//             <span class="buttonIcon"><ion-icon name="chevron-down-circle"></ion-icon></span>
//           </button></td>
//         <td colspan="5">
//           <button class="duty-${itemQty}" onclick="ClearDutyArray (this)">
//           <span class="buttonText">Очистить графу</span>
//           <span class="buttonIcon"><ion-icon name="trash-bin"></ion-icon></span>
//           </button></td>
//           <td colspan="6">
//                 <div class="classification">
//                   <a href="https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=fhuoCA&base=LAW&n=380602&cacheid=91EE7F34B05BC0730D198101904AB3CB&mode=rubr#Ra75Q2TaUet7JsxD" target="_blank" class="grafaClass">
//                     ТК<ion-icon name="information-circle"></ion-icon>
//                   </a>
//                   <a href="https://www.consultant.ru/cons/cgi/online.cgi?req=doc&ts=hjT4Q2TusrhNFg7W1&cacheid=34C7E46B2C6BB044D11BD43EE418465C&mode=splus&base=LAW&n=348846#5QZ4Q2TvIDpWFYG3" target="_blank" class="grafaClass">
//                     СБР<ion-icon name="information-circle"></ion-icon>
//                   </a>
//                   <a href="https://www.consultant.ru/cons/cgi/online.cgi?req=doc&ts=UXg4Q2TyVxCwXmp4&cacheid=403FF677C1B08A5ABEB1BB6956E2A5EB&mode=splus&rnd=fhuoCA&base=LAW&n=401724#Qnh4Q2T02vm8gCSt1" target="_blank" class="grafaClass">
//                     ВЫП<ion-icon name="information-circle"></ion-icon>
//                    </a>
//                    <a href="https://www.consultant.ru/cons/cgi/online.cgi?from=411576-54&req=doc&rnd=fhuoCA&base=LAW&n=405649#kFl4Q2T4hfmvtTS8" target="_blank" class="grafaClass">
//                     ВОП<ion-icon name="information-circle"></ion-icon>
//                    </a>
//                    <a href="https://www.consultant.ru/cons/cgi/online.cgi?req=doc&rnd=fhuoCA&base=LAW&n=412738&cacheid=7DA405B11854BBDB7AC3B02398498801&mode=rubr#uVp4Q2TmjK4VDRr9" target="_blank" class="grafaClass">
//                     НАЛ<ion-icon name="information-circle"></ion-icon>
//                    </a>
//                 </div>
//             </td>
//         <td colspan="14">Всего по всем графам 47</td>
//       </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-1]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-1-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-2]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-1-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-3]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-1-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-4]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-1-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-5]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-1-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4">Вид</td>
//         <td colspan="8">Сумма</td>
//         <td colspan="2">СП</td>
//       </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-6]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-2-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-7]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-2-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-8]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-2-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-9]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-2-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-10]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-2-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//         </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-11]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-3-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-12]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-3-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-13]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-3-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-14]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-3-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-15]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-3-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//         </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-16]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-4-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-17]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-4-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-18]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-4-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-19]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-4-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-20]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-4-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//       </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-21]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-5-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-22]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-5-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-23]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-5-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-24]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-5-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-25]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-5-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//       </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-26]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-6-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-27]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-6-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-28]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-6-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-29]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-6-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-30]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-6-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//       </tr>
//       <tr>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-31]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-7-1" placeholder="Вид" list="dutyCode"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-32]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-7-2" placeholder="Основа начисления" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="6"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-33]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-7-3" placeholder="Ставка"/></td>
//         <td colspan="8"><div class="number"> <input type="number" name="data[${itemQty}-grafa47t1-34]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-7-4" placeholder="Сумма" onfocusout="rounding(this, 2)"/></td>
//         <td colspan="2"><div class="question"> <input type="text" name="data[${itemQty}-grafa47t1-35]" class="grafa47t${itemQty}" id="grafa47t${itemQty}-7-5" placeholder="СП" list="paymentCode"/></td>
//         <td colspan="4"></td>
//         <td colspan="8"></td>
//         <td colspan="2"></td>
//       </tr>
// `;
//   var tab = document.getElementById('mainTable');

//   tab.innerHTML +=template;
  // var buttonText = "Добавить товар № " + (itemQty+1);
  // var butArray = document.getElementsByName ('addNewGoods');
  // for (i = 0; i < butArray.length; i++) {
  //  butArray[i].textContent = buttonText;
  // }
  
  // var buttonText = "Удалить товар № " + itemQty;
  // var butArray = document.getElementsByName ('remNewGoods');
  // for (i = 0; i < butArray.length; i++) {
  //   butArray[i].textContent = buttonText;
  // }



  // function showNotification() {
//   const notification = new Notification('Статус отправки декларации!', {
//     body: 'Декларация успешно отправлена. Можно закрывать страницу.',
//     icon: '../images/menuico.png'
//   });
// }
// if (Notification.permission === 'granted') {
//   showNotification();
// } else if (Notification.permission !== 'denied') {
//   Notification.requestPermission().then(permission => {
//     if (permission === 'granted') {
//       showNotification();
//     }
//   });
// };