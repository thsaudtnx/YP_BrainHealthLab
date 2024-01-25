import React from 'react';
import styles from './collboration.module.css';

const CollaborationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>사업 제휴 문의</div>
        <div className={styles.description}>
          <div>YP 뇌교육연구소는 분야별 유망업체와 적극적인 제휴를 하여 최고의 교육을 진행하고 있습니다</div> 
          <div>프랜차이즈 입점 문의, 단체교육 문의, 위탁교육 등의 제안을 주시면 검토 후 연락 드리겠습니다</div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.cards1}>
          <div className={styles.card1}>
            <div className={styles.card1Image}></div>
            <div className={styles.card1Description}>
              <div className={styles.card1Title1}>Partnership 01</div>
              <div className={styles.card1Title2}>프렌차이즈 입점 문의</div>
              <div className={styles.card1Title3}>YP 뇌교육연구소와 제휴하여 프랜차이즈 입점을 하실 수 있습니다</div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1Image}></div>
            <div className={styles.card1Description}>
              <div className={styles.card1Title1}>Partnership 02</div>
              <div className={styles.card1Title2}>기업 및 학교 단체 교육</div>
              <div className={styles.card1Title3}>5명 이상의 단체나 기업을 위한 맞춤 교육을 실시하고 있습니다</div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1Image}></div>
            <div className={styles.card1Description}>
              <div className={styles.card1Title1}>Partnership 03</div>
              <div className={styles.card1Title2}>광고/홍보 사업제휴</div>
              <div className={styles.card1Title3}>YP뇌교육연구소와 제휴하여 고퀄리티의 광고 및 홍보를 제작할 수 있습니다</div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1Image}></div>
            <div className={styles.card1Description}>
              <div className={styles.card1Title1}>Partnership 04</div>
              <div className={styles.card1Title2}>위탁교육</div>
              <div className={styles.card1Title3}>학생들의 위탁교육을 통해 전문적이고 창의적인 인재를 양성합니다</div>
            </div>
          </div>
        </div>

        <div className={styles.cards2}>
          <div className={styles.left}>
            <div className={styles.card2}>
              <div className={styles.card2Header}>
                <div className={styles.card2Number}>1</div>
                <div>
                  <div className={styles.card2Title1}>기업/단체 정보 입력</div>
                  <div className={styles.card2Title2}>원활한 상담을 위해 항목을 기재 부탁드립니다</div>
                </div>
              </div>
              <div style={{marginTop : 20}}>
                <div className={styles.card2Section}>
                  <div className={styles.card2Title3}>제휴 분야 <span className={styles.card2Star}>*</span></div>
                  <div>
                    <select style={{
                      borderRadius : 10,
                      border : '1px solid lightgray', 
                      padding : 10,
                      color : 'gray',
                      width : '100%',
                      marginBottom : 10,
                    }}>
                      <option value="1">프렌차이즈</option>
                      <option value="2">기업 및 학교 단체교육</option>
                      <option value="3">광고/홍보 사업제휴</option>
                      <option value="4">위탁교육</option>
                    </select>
                  </div>
                </div>
                <div className={styles.card2Section}>
                  <div className={styles.card2Title3}>회사명(이름)<span className={styles.cardStar}>*</span></div>
                  <div>
                    <input style={{
                      borderRadius : 10,
                      border : '1px solid lightgray', 
                      padding : 10,
                      color : 'gray',
                      width : '100%',
                      marginBottom : 10,
                    }} type="text" placeholder='회사명(이름)을 입력해주세요'/>
                  </div>
                </div>
                <div className={styles.card2Section}>
                  <div className={styles.card2Title3}>연락처<span className={styles.cardStar}>*</span></div>
                  <div>
                    <input style={{
                      borderRadius : 10,
                      border : '1px solid lightgray', 
                      padding : 10,
                      color : 'gray',
                      width : '100%',
                      marginBottom : 10,
                    }} type="text" placeholder="'-'을 제외하고 입력해주세요"/>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              paddingTop : 20,
              paddingBottom : 20,
              margin : '0px 10px'}}>
              <div style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                <div style={{margin : '0px 5px', color : 'gray', fontWeight : 'bold'}}>*</div>
                <div style={{color : 'gray', fontSize : 14}}>입력하신 정보가 올바르지 않을 시 상담문의가 제한 될 수 있습니다</div>
              </div>
              <div style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                <div style={{margin : '0px 5px', color : 'gray', fontWeight : 'bold'}}>*</div>
                <div style={{color : 'gray', fontSize : 14}}>입력하신 정보는 문의목적 외에 다른 용도로 사용 되지 않습니다</div>
              </div>
            </div>
          </div>
          
          <div className={styles.right}>
            <div style={{
              marginLeft: 30,
              width : 810,
              borderRadius: 10,
              boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
              transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
              backgroundColor: 'white',
              padding : 30,
            }}>
              <div className={styles.card2Header}>
                <div className={styles.card2Number}>2</div>
                <div>
                  <div className={styles.card2Title1}>제휴 문의 내용 입력</div>
                  <div className={styles.card2Title2}>원하는 사업 제휴의 자세한 내용 입력</div>
                </div>
              </div>
              <div>
                <div style={{marginTop : 20, marginBottom : 10, color : 'gray'}}>문의 내용</div>
                <div>
                  <textarea style={{
                      borderRadius : 10,
                      border : '1px solid lightgray', 
                      padding : 10,
                      color : 'gray',
                      width : '100%',
                      resize : 'none',
                      overflow : 'auto',
                      marginBottom : 10,
                    }} placeholder="문의사항을 입력해주세요" cols={30} rows={8}></textarea>
                </div>
                <div style={{
                  display : 'flex', 
                  flexDirection : 'row', 
                  justifyContent : 'center', 
                  alignItems : 'center',
                  marginBottom : 20,}}>
                  <input type="radio" style={{ border : '2px solid gray', width : 18, height : 18, marginRight : 5}} />
                  <div style={{fontSize : 14, color : 'gray'}}>개인정보 수집 동의</div>
                </div>
              </div>
              <div style={{display : 'flex', justifyContent : 'center'}}>
                <button style={{
                    borderRadius : 10,
                    backgroundColor : 'gray',
                    color : 'white',
                    padding : '10px 50px',
                    width : '',
                    marginBottom : 10,
                  }}>
                  제휴신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;