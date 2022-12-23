import React from "react";

const Member = () => {
  return (
    <div className="dark:bg-black flex flex-col items-center mb-12">
      <div className="text-5xl font-bold my-10">멤버 소개</div>
      <div className="front text-center">
        <div className="text-2xl font-bold mb-6">front</div>
        <div className="mb-10">
          <div className="w-4/12 mx-auto border rounded-xl">
            <img src="/image/조승현.png" alt="" />
            <div className="text-justify p-4">소개</div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="w-4/12 mr-6 border rounded-xl">
              <img src="/image/최금옥.png" alt="" className="w-full" />
              <div className="text-justify p-4">소개</div>
            </div>
            <div className="w-4/12 border rounded-xl">
              <img src="/image/허강현.png" alt="" className="w-full" />
              <div className="text-justify p-4">소개</div>
            </div>
          </div>
        </div>
      </div>
      <div className="back text-center mt-10 w-full">
        <div className="text-2xl font-bold mb-6">back</div>
        <div>
          <div className="w-4/12 mx-auto border rounded-xl ">
            <img src="/image/신래은.png" alt="" />
            <div className=" text-justify p-4">
              <p className="text-center mb-2">신래은</p>
              <p>github 관리</p>
              <p>팀 리더 업무 ( 협의 )</p>
              <p>Service – 파일 다운로드 서비스</p>
              <p>MySQL 뷰 생성 및 스프링 부트 연결</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-4/12 mr-6 border rounded-xl">
              <img src="/image/이영은.png" alt="" className="w-full" />
              <div className="text-justify p-4">
                <p className="text-center mb-2">이영은</p>
                <p>외부 데이터 수집</p>
                <p>Service – 베스트 셀러 목록 출력 서비스</p>
                <p>Dummy data 생성</p>
              </div>
            </div>
            <div className="w-4/12 mr-6 border rounded-xl">
              <img src="/image/김동현.png" alt="" className="w-full" />
              <div className="text-justify p-4">
                <p className="text-center mb-2">김동현</p>
                <p>외부 데이터 수집</p>
                <p>Service – 검색 기능 서비스 ( 제목 & 작가 )</p>
                <p>ER Diagram</p>
              </div>
            </div>
            <div className="w-4/12 border rounded-xl">
              <img src="/image/박정은.png" alt="" className="w-full" />
              <div className="text-justify p-4">
                <p className="text-center mb-2">박정은</p>
                <p>외부 데이터 수집</p>
                <p>Service – 상세 페이지 출력 서비스</p>
                <p>Dummy data 생성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
