import React from 'react';
import { Col, Row } from 'antd';
import '../style.css';
import { Link } from 'react-router-dom';
import { BackwardOutlined } from '@ant-design/icons';
import AccountNavigation from './accountNavigation';
import TextField from '../../../components/textField/inputComponent';

const AccountInfo = () => {
  return (
    <div>
      <Row>
        <Col span={30} style={{ zIndex: '-1', marginBottom: '20px' }}>
          <img
            src={
              'https://imgs.ogaanindia.com/homepage/2022/Market/october/20-oct/mob/new/om-festive-collection-desktop-sticky-IND.jpg'
            }
          />
        </Col>
      </Row>

      <Row justify="center" wrap>
        <Col className="helpus_hide Account-navigation" md={5} lg={5} xl={5} xxl={4}>
          <AccountNavigation active={'Account Information'} />
        </Col>
        <Col md={15} sm={22} xs={23} lg={14} xl={13} xxl={11} className="Account-user-details">
          <div className="right-block ">
            <div className="ogaan-content">
              <div className="data-block">
                <h2 className="title">EDIT ACCOUNT INFORMATION</h2>
              </div>

              <div className="edit-block">
                <div className="edit-content">
                  <div className="edit-data">
                    <h2 className="heading">ACCOUNT INFORMATION</h2>
                    <div className="edit-field">
                      <div className="field-left">
                        <label className="text-field">Full Name</label>
                      </div>
                      <div className="field-right">
                        <div className="select-field">
                          <div className="select">
                            <select className="name-prefix" defaultValue={'Mr'}>
                              <option value="Mr">Mr</option>
                              <option value="Ms">Ms</option>
                            </select>
                          </div>
                        </div>
                        <label className="edit-text name-field">
                          <TextField
                            placeholder={'First Name'}
                            id={'fname'}
                            name={'fname'}
                            type={'text'}
                            disabled={false}
                            defaultValue={'sahil'}
                          />
                        </label>
                        <label className="edit-text name-field">
                          <TextField
                            placeholder={'Last Name'}
                            id={'lname'}
                            name={'lname'}
                            type={'text'}
                            disabled={false}
                            defaultValue={'Egss'}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="edit-field">
                      <div className="field-left">
                        <label className="text-field">Email Address</label>
                      </div>
                      <div className="field-right">
                        <label className="edit-text">
                          <TextField
                            placeholder={'Email Address'}
                            id={'email'}
                            name={'email'}
                            type={'text'}
                            disabled={true}
                            defaultValue={'sahilEgss@gmail.com'}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="edit-data">
                    <h2 className="heading">ADDITIONAL INFORMATION</h2>
                    <div className="edit-field">
                      <div className="field-left">
                        <label className="text-field">Country</label>
                      </div>
                      <div className="field-right">
                        <div className="select-country">
                          <select className="country" defaultValue={'141'}>
                            <option value="41"> Afghanistan </option>
                            <option value="223"> Saint BarthŽlemy </option>
                            <option value="275"> U.S. Minor Outlying Islands </option>
                            <option value="42"> Åland Islands </option>
                            <option value="43"> Albania </option>
                            <option value="44"> Algeria </option>
                            <option value="45"> American Samoa </option>
                            <option value="46"> Andorra </option>
                            <option value="47"> Angola </option>
                            <option value="48"> Anguilla </option>
                            <option value="49"> Antarctica </option>
                            <option value="50"> Antigua and Barbuda </option>
                            <option value="51"> Argentina </option>
                            <option value="52"> Armenia </option>
                            <option value="53"> Aruba </option>
                            <option value="54"> Australia </option>
                            <option value="55"> Austria </option>
                            <option value="56"> Azerbaijan </option>
                            <option value="57"> Bahamas </option>
                            <option value="58"> Bahrain </option>
                            <option value="59"> Bangladesh </option>
                            <option value="60"> Barbados </option>
                            <option value="61"> Belarus </option>
                            <option value="62"> Belgium </option>
                            <option value="63"> Belize </option>
                            <option value="64"> Benin </option>
                            <option value="65"> Bermuda </option>
                            <option value="66"> Bhutan </option>
                            <option value="67"> Bolivia </option>
                            <option value="68"> Bosnia and Herzegovina </option>
                            <option value="69"> Botswana </option>
                            <option value="70"> Bouvet Island </option>
                            <option value="71"> Brazil </option>
                            <option value="72"> British Indian Ocean Territory </option>
                            <option value="73"> British Virgin Islands </option>
                            <option value="74"> Brunei </option>
                            <option value="75"> Bulgaria </option>
                            <option value="76"> Burkina Faso </option>
                            <option value="77"> Burundi </option>
                            <option value="78"> Cambodia </option>
                            <option value="79"> Cameroon </option>
                            <option value="80"> Canada </option>
                            <option value="81"> Cape Verde </option>
                            <option value="82"> Cayman Islands </option>
                            <option value="83"> Central African Republic </option>
                            <option value="84"> Chad </option>
                            <option value="85"> Chile </option>
                            <option value="86"> China </option>
                            <option value="87"> Christmas Island </option>
                            <option value="88"> Cocos [Keeling] Islands </option>
                            <option value="89"> Colombia </option>
                            <option value="90"> Comoros </option>
                            <option value="91"> Congo - Brazzaville </option>
                            <option value="92"> Congo - Kinshasa </option>
                            <option value="93"> Cook Islands </option>
                            <option value="94"> Costa Rica </option>
                            <option value="95"> Côte d’Ivoire </option>
                            <option value="96"> Croatia </option>
                            <option value="97"> Cuba </option>
                            <option value="98"> Cyprus </option>
                            <option value="99"> Czech Republic </option>
                            <option value="100"> Denmark </option>
                            <option value="101"> Djibouti </option>
                            <option value="102"> Dominica </option>
                            <option value="103"> Dominican Republic </option>
                            <option value="104"> Ecuador </option>
                            <option value="105"> Egypt </option>
                            <option value="106"> El Salvador </option>
                            <option value="107"> Equatorial Guinea </option>
                            <option value="108"> Eritrea </option>
                            <option value="109"> Estonia </option>
                            <option value="110"> Ethiopia </option>
                            <option value="111"> Falkland Islands </option>
                            <option value="112"> Faroe Islands </option>
                            <option value="113"> Fiji </option>
                            <option value="114"> Finland </option>
                            <option value="115"> France </option>
                            <option value="116"> French Guiana </option>
                            <option value="117"> French Polynesia </option>
                            <option value="118"> French Southern Territories </option>
                            <option value="119"> Gabon </option>
                            <option value="120"> Gambia </option>
                            <option value="121"> Georgia </option>
                            <option value="122"> Germany </option>
                            <option value="123"> Ghana </option>
                            <option value="124"> Gibraltar </option>
                            <option value="125"> Greece </option>
                            <option value="126"> Greenland </option>
                            <option value="127"> Grenada </option>
                            <option value="128"> Guadeloupe </option>
                            <option value="129"> Guam </option>
                            <option value="130"> Guatemala </option>
                            <option value="131"> Guernsey </option>
                            <option value="132"> Guinea </option>
                            <option value="133"> Guinea-Bissau </option>
                            <option value="134"> Guyana </option>
                            <option value="135"> Haiti </option>
                            <option value="136"> Heard Island and McDonald Islands </option>
                            <option value="137"> Honduras </option>
                            <option value="138"> Hong Kong SAR China </option>
                            <option value="139"> Hungary </option>
                            <option value="140"> Iceland </option>
                            <option value="141">India</option>
                            <option value="142"> Indonesia </option>
                            <option value="143"> Iran </option>
                            <option value="144"> Iraq </option>
                            <option value="145"> Ireland </option>
                            <option value="146"> Isle of Man </option>
                            <option value="147"> Israel </option>
                            <option value="148"> Italy </option>
                            <option value="149"> Jamaica </option>
                            <option value="150"> Japan </option>
                            <option value="151"> Jersey </option>
                            <option value="152"> Jordan </option>
                            <option value="153"> Kazakhstan </option>
                            <option value="154"> Kenya </option>
                            <option value="155"> Kiribati </option>
                            <option value="156"> Kuwait </option>
                            <option value="157"> Kyrgyzstan </option>
                            <option value="158"> Laos </option>
                            <option value="159"> Latvia </option>
                            <option value="160"> Lebanon </option>
                            <option value="161"> Lesotho </option>
                            <option value="162"> Liberia </option>
                            <option value="163"> Libya </option>
                            <option value="164"> Liechtenstein </option>
                            <option value="165"> Lithuania </option>
                            <option value="166"> Luxembourg </option>
                            <option value="167"> Macau SAR China </option>
                            <option value="168"> Macedonia </option>
                            <option value="169"> Madagascar </option>
                            <option value="170"> Malawi </option>
                            <option value="171"> Malaysia </option>
                            <option value="172"> Maldives </option>
                            <option value="173"> Mali </option>
                            <option value="174"> Malta </option>
                            <option value="175"> Marshall Islands </option>
                            <option value="176"> Martinique </option>
                            <option value="177"> Mauritania </option>
                            <option value="178"> Mauritius </option>
                            <option value="179"> Mayotte </option>
                            <option value="180"> Mexico </option>
                            <option value="181"> Micronesia </option>
                            <option value="182"> Moldova </option>
                            <option value="183"> Monaco </option>
                            <option value="184"> Mongolia </option>
                            <option value="185"> Montenegro </option>
                            <option value="186"> Montserrat </option>
                            <option value="187"> Morocco </option>
                            <option value="188"> Mozambique </option>
                            <option value="189"> Myanmar [Burma] </option>
                            <option value="190"> Namibia </option>
                            <option value="191"> Nauru </option>
                            <option value="192"> Nepal </option>
                            <option value="193"> Netherlands </option>
                            <option value="194"> Netherlands Antilles </option>
                            <option value="195"> New Caledonia </option>
                            <option value="196"> New Zealand </option>
                            <option value="197"> Nicaragua </option>
                            <option value="198"> Niger </option>
                            <option value="199"> Nigeria </option>
                            <option value="200"> Niue </option>
                            <option value="201"> Norfolk Island </option>
                            <option value="202"> Northern Mariana Islands </option>
                            <option value="203"> North Korea </option>
                            <option value="204"> Norway </option>
                            <option value="205"> Oman </option>
                            <option value="206"> Pakistan </option>
                            <option value="207"> Palau </option>
                            <option value="208"> Palestinian Territories </option>
                            <option value="209"> Panama </option>
                            <option value="210"> Papua New Guinea </option>
                            <option value="211"> Paraguay </option>
                            <option value="212"> Peru </option>
                            <option value="213"> Philippines </option>
                            <option value="214"> Pitcairn Islands </option>
                            <option value="215"> Poland </option>
                            <option value="216"> Portugal </option>
                            <option value="217"> Puerto Rico </option>
                            <option value="218"> Qatar </option>
                            <option value="219"> Réunion </option>
                            <option value="220"> Romania </option>
                            <option value="221"> Russia </option>
                            <option value="222"> Rwanda </option>
                            <option value="1138"> Saint Barthélemy </option>
                            <option value="224"> Saint Helena </option>
                            <option value="225"> Saint Kitts and Nevis </option>
                            <option value="226"> Saint Lucia </option>
                            <option value="227"> Saint Martin </option>
                            <option value="228"> Saint Pierre and Miquelon </option>
                            <option value="229"> Saint Vincent and the Grenadines </option>
                            <option value="230"> Samoa </option>
                            <option value="231"> San Marino </option>
                            <option value="232"> São Tomé and Príncipe </option>
                            <option value="233"> Saudi Arabia </option>
                            <option value="234"> Senegal </option>
                            <option value="235"> Serbia </option>
                            <option value="236"> Seychelles </option>
                            <option value="237"> Sierra Leone </option>
                            <option value="238"> Singapore </option>
                            <option value="239"> Slovakia </option>
                            <option value="240"> Slovenia </option>
                            <option value="241"> Solomon Islands </option>
                            <option value="242"> Somalia </option>
                            <option value="243"> South Africa </option>
                            <option value="244">
                              {' '}
                              South Georgia and the South Sandwich Islands{' '}
                            </option>
                            <option value="245"> South Korea </option>
                            <option value="246"> Spain </option>
                            <option value="247"> Sri Lanka </option>
                            <option value="248"> Sudan </option>
                            <option value="249"> Suriname </option>
                            <option value="250"> Svalbard and Jan Mayen </option>
                            <option value="251"> Swaziland </option>
                            <option value="252"> Sweden </option>
                            <option value="253"> Switzerland </option>
                            <option value="254"> Syria </option>
                            <option value="255"> Taiwan </option>
                            <option value="256"> Tajikistan </option>
                            <option value="257"> Tanzania </option>
                            <option value="258"> Thailand </option>
                            <option value="259"> Timor-Leste </option>
                            <option value="260"> Togo </option>
                            <option value="261"> Tokelau </option>
                            <option value="262"> Tonga </option>
                            <option value="263"> Trinidad and Tobago </option>
                            <option value="264"> Tunisia </option>
                            <option value="265"> Turkey </option>
                            <option value="266"> Turkmenistan </option>
                            <option value="267"> Turks and Caicos Islands </option>
                            <option value="268"> Tuvalu </option>
                            <option value="269"> Uganda </option>
                            <option value="270"> Ukraine </option>
                            <option value="271"> United Arab Emirates </option>
                            <option value="272"> United Kingdom </option>
                            <option value="273"> United States </option>
                            <option value="274"> Uruguay </option>
                            <option value="1139"> U.S. Outlying Islands </option>
                            <option value="276"> U.S. Virgin Islands </option>
                            <option value="277"> Uzbekistan </option>
                            <option value="278"> Vanuatu </option>
                            <option value="279"> Vatican City </option>
                            <option value="280"> Venezuela </option>
                            <option value="281"> Vietnam </option>
                            <option value="282"> Wallis and Futuna </option>
                            <option value="283"> Western Sahara </option>
                            <option value="284"> Yemen </option>
                            <option value="285"> Zambia </option>
                            <option value="286"> Zimbabwe </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="edit-field">
                      <div className="field-left">
                        <label className="text-field">Phone</label>
                      </div>
                      <div className="field-right">
                        <label className="edit-text">
                          <TextField
                            placeholder={'Phone Number'}
                            id={'phoneNo'}
                            name={'phoneNo'}
                            type={'number'}
                            disabled={false}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="edit-buttons">
                    <div className="buttons">
                      <BackwardOutlined
                        style={{ fontSize: '20px', marginRight: '2px', paddingTop: '3px' }}
                      />
                      <Link to={'/customer/account'} className="back-to-account">
                        Back
                      </Link>
                    </div>
                    <div className="buttons">
                      <label className="save-block">
                        <div className="save-btn">SAVE</div>
                      </label>
                      <div className="required">* Required Fields</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AccountInfo;
