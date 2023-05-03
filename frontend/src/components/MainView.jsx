const MainView = () => {
  return (
    <div className="flex">
      <div className="w-1/2 font-display justify-center items-start mt-28 ml-48">
        <div className="text-5xl font-bold">LEE JOO YEOL</div>
        <div className="mt-4 font-semibold">BLOCKCHAIN DEVELOPER</div>
        <div className="mt-24 font-light font-koreanHeader">
          안녕하세요👋
          <br />
          저는 신입 블록체인 개발자 이주열 입니다.
          <br />
          저는 팀원들과 소통하여 함께 성장하는 것을 좋아합니다.
          <br />
          또한 융통성있게 배우고 개발하는 것을 즐깁니다.
        </div>
      </div>
      <div>
        <img
          className="h-96 rounded-full mt-24 shadow-2xl shadow-black"
          src="images/me.jpeg"
          alt="me"
        ></img>
      </div>
    </div>
  );
};
export default MainView;
