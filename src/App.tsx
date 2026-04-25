import img1 from "./assets/1.png";
import img21 from "./assets/2-1.png";
import horizontalLine from "./assets/vectors/horizontal-line.svg";
import heartSvg from "./assets/vectors/Heart.svg";
import littleHeart from "./assets/vectors/little-heart.svg";
import line1 from "./assets/vectors/line1.svg";
import line2 from "./assets/vectors/line2.svg";
import line3 from "./assets/vectors/line3.svg";
import venue from "./assets/venue.png";

const invitationRepeats = ["вы приглашены", "вы приглашены", "вы приглашены"];

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const juneDates = [
    { day: "8", highlighted: false },
    { day: "9", highlighted: false },
    { day: "10", highlighted: false },
    { day: "11", highlighted: false },
    { day: "12", highlighted: false },
    { day: "13", highlighted: false },
    { day: "14", highlighted: true },
];

const scheduleItems = [
    {
        time: "17:00",
        title: "Сбор гостей",
        details: "ЗАГС №1\nАнглийская набережная, 28",
        top: "top-[1622px]",
        timeTop: "top-[1632px]",
        detailsTop: "top-[1650px]",
        right: "right-[86px]",
        detailsRight: "right-[23px]",
    },
    {
        time: "17:40",
        title: "Торжественная церемония",
        details: "",
        top: "top-[1702px]",
        timeTop: "top-[1713px]",
        detailsTop: "",
        right: "right-[31px]",
        detailsRight: "",
    },
    {
        time: "18:30",
        title: "Праздничный банкет",
        details: "",
        top: "top-[1787px]",
        timeTop: "top-[1802px]",
        detailsTop: "",
        right: "right-[46px]",
        detailsRight: "",
    },
    {
        time: "23:30",
        title: "Окончание мероприятия",
        details: "",
        top: "top-[1876px]",
        timeTop: "top-[1891px]",
        detailsTop: "",
        right: "right-12",
        detailsRight: "",
    },
];

const paletteColors = [
    { className: "left-7 bg-[#462b16]" },
    { className: "left-28 bg-[#626027]" },
    { className: "left-[196px] bg-[#95916d]" },
    { className: "right-[25px] bg-[#ddc9a8]" },
];

export const Mobile = (): JSX.Element => {
    return (
        <main
            className="bg-white overflow-hidden mx-auto w-[375px] max-w-[375px] h-[3347px] relative"
            aria-label="Свадебное приглашение"
        >
            <header className="flex flex-col w-[375px] h-10 items-start absolute top-0 left-0">
                <div className="flex h-10 items-center justify-around gap-[201px] px-6 py-4 relative self-stretch w-full bg-[#7e7c3e]">
                    <div className="flex w-[327px] items-center justify-between relative mt-[-8.50px] mb-[-8.50px]">
                        <div className="w-[327px] relative flex h-[25px] items-center gap-4">
                            <time className="relative w-fit font-ebgaramond font-medium text-[#eeeeeb] text-base text-center tracking-[1.60px] leading-[19.2px] whitespace-nowrap">
                                14 июня, 2026
                            </time>
                            <div className="relative w-[183px] font-ebgaramond font-medium text-[#eeeeeb] text-base text-right tracking-[1.60px] leading-[19.2px]">
                                wedding day
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="absolute w-[calc(100%_-_4px)] top-10 left-1 h-[372px] aspect-[1] object-cover">
                <img
                    className="w-full h-full object-cover"
                    alt="Фотография пары"
                    src={img1}
                />
            </div>
            <div className="absolute top-[322px] right-[54px] w-[272px] font-denistina font-normal text-[#7e7c3e] text-[40px] text-center tracking-[0] leading-[46.8px] whitespace-nowrap">
                Юлия &amp; Артём
            </div>
            <section aria-labelledby="invitation-title">
                <h1
                    id="invitation-title"
                    className="absolute w-[calc(100%_-_40px)] top-[433px] left-5 font-denistina font-normal text-[#7e7c3e] text-[40px] text-center tracking-[0] leading-[48.0px]"
                >
                    Дорогие друзья и родные!
                </h1>
                <img
                    className="w-[240px] top-[470px] left-[calc(50%_-_120px)] opacity-40 absolute h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <img
                    className="absolute top-[516px] left-[calc(50%_-_70px)] w-[140px] opacity-40 h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <p className="absolute w-[calc(100%_-_40px)] top-[537px] left-5 font-ebgaramond font-normal text-[#7e7c3e] text-[26px] text-center tracking-[0] leading-[29.4px]">
                    Приглашаем вас разделить с нами этот праздник — <br />
                    день нашей свадьбы!
                </p>
            </section>
            <div className="w-full top-[663px] h-10 absolute left-0 bg-[#7e7c3e]" />
            <div
                className="w-[calc(100%_-_13px)] absolute top-[670px] left-2 flex h-[25px] items-center gap-4"
                aria-hidden="true"
            >
                {invitationRepeats.map((text, index) => (
                    <div
                        key={`${text}-${index}`}
                        className={`relative ${index === 0 ? "w-[114px] text-center" : "w-[108px] text-right"
                            } font-cormorant font-medium text-[#eeeeeb] text-sm tracking-[1.40px] leading-[16.8px]`}
                    >
                        {text}
                    </div>
                ))}
            </div>
            <section aria-labelledby="date-title">
                <div className="absolute top-[724px] left-[38px] font-denistina font-normal text-backgroundbackground-3 text-2xl tracking-[2.40px] leading-[26.4px] whitespace-nowrap">
                    дата свадьбы:
                </div>
                <img
                    className="top-[748px] left-[33px] w-[140px] opacity-40 absolute h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <h2
                    id="date-title"
                    className="absolute top-[757px] left-[calc(50.00%_-_48px)] w-24 font-cormorant font-bold text-[#7e7c3e] text-[26px] text-center tracking-[0] leading-[31.2px] whitespace-nowrap"
                >
                    ИЮНЬ
                </h2>
                <div
                    className="absolute w-[calc(100%_-_39px)] top-[803px] left-5 flex flex-col bg-white border-solid border-r border-b border-[#e0e0e0]"
                    role="img"
                    aria-label="Календарь июня, дата свадьбы — 14 число"
                >
                    <div className="h-8 inline-flex w-[336px] relative items-start bg-white border-r  border-[#e0e0e0]">
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className="flex w-12 h-8 items-center justify-center relative border-t [border-top-style:solid] border-l [border-left-style:solid] border-[#e0e0e0]"
                            >
                                <div className="relative w-fit font-cormorant font-bold text-[#666666] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    {day}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-12 inline-flex w-[336px] relative items-start border-r border-[#e0e0e0] bg-white">
                        {juneDates.map(({ day, highlighted }) => (
                            <div
                                key={day}
                                className="flex flex-col w-12 h-12 items-center justify-center relative border-t [border-top-style:solid] border-l [border-left-style:solid] border-[#e0e0e0]"
                            >
                                <div
                                    className={`flex w-9 h-9 items-center justify-center relative rounded-[18px] overflow-hidden ${highlighted ? "border border-solid border-[#7e7c3e]" : ""
                                        }`}
                                >
                                    <div
                                        className={`relative w-fit font-ebgaramond font-medium text-base tracking-[0] leading-[normal] ${highlighted ? "text-[#7e7c3e]" : "text-[#49463e]"
                                            }`}
                                    >
                                        {day}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section aria-labelledby="venue-title">
                <div className="absolute w-[calc(100%_+_1px)] top-[925px] left-0 h-[472px] bg-[#7e7c3e]" />
                <h2
                    id="venue-title"
                    className="absolute top-[940px] left-[calc(50.00%_-_118px)] w-[235px] font-cormorant font-bold text-[#eeeeeb] text-[26px] text-center tracking-[0] leading-[31.2px]"
                >
                    МЕСТО ПРОВЕДЕНИЯ
                </h2>
                <div
                    className="absolute top-[1018px] left-[68px] w-[243px] h-[324px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${venue})` }}
                    role="img"
                    aria-label="Фотография места проведения"
                />
                <div className="absolute top-[1352px] left-[103px] w-[173px] font-cormorant font-bold text-[#eeeeeb] text-[21px] text-center tracking-[2.10px] leading-[23.1px]">
                    EVENT LOFT
                </div>
            </section>
            <section aria-labelledby="address-title">
                <div className="absolute top-[1422px] left-[38px] font-denistina font-normal text-[#7d7662] text-2xl tracking-[2.40px] leading-[26.4px] whitespace-nowrap">
                    по адресу:
                </div>
                <img
                    className="top-[1445px] left-[30px] w-[130px] opacity-40 absolute h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <h2 id="address-title" className="sr-only">
                    Адрес проведения
                </h2>
                <address className="not-italic">
                    <div className="absolute w-[calc(100%_-_36px)] top-[1453px] left-[18px] font-cormorant font-semibold text-[#7d7662] text-[19px] tracking-[1.90px] leading-[20.9px]">
                        Набережная реки Фонтанки, 59
                    </div>
                    <div className="absolute top-[1475px] left-[18px] font-cormorant font-semibold text-[#7d7662] text-xl tracking-[2.00px] leading-[22.0px] whitespace-nowrap">
                        Мраморный зал
                    </div>
                </address>
            </section>
            <section aria-labelledby="program-title">
                <div className="top-[1534px] w-[375px] h-[451px] absolute left-0 bg-[#7e7c3e]" />
                <h2
                    id="program-title"
                    className="absolute top-[1559px] left-[calc(50.00%_-_116px)] w-[235px] font-cormorant font-bold text-[#eeeeeb] text-[26px] text-center tracking-[0] leading-[31.2px] whitespace-nowrap"
                >
                    ПРОГРАММА ДНЯ
                </h2>
                <div className="absolute top-[1583px] right-[35px] font-denistina font-normal text-[#eeeeeb] text-2xl tracking-[2.40px] leading-[26.4px] whitespace-nowrap">
                    ждём вас
                </div>
                {scheduleItems.map((item, index) => (
                    <div key={`${item.time}-${index}`}>
                        <div
                            className={`absolute ${item.top} ${item.right} ${index === 0 ? "text-center whitespace-nowrap" : ""
                                } ${index === 1 ? "w-[213px]" : "w-[196px]"
                                } font-cormorant font-semibold text-[#eeeeeb] text-2xl tracking-[2.40px] leading-[25.4px]`}
                        >
                            {item.title}
                        </div>
                        <time
                            className={`absolute ${item.timeTop} ${index === 0
                                ? "left-[29px]"
                                : index === 1
                                    ? "left-[29px] w-[63px]"
                                    : index === 2
                                        ? "left-7"
                                        : "left-8"
                                } font-cormorant font-semibold text-[#eeeeeb] text-2xl ${index === 0 || index === 2 || index === 3
                                    ? "text-center whitespace-nowrap"
                                    : ""
                                } tracking-[2.40px] leading-[26.4px]`}
                        >
                            {item.time}
                        </time>
                        {item.details ? (
                            <div
                                className={`absolute ${item.detailsTop} ${item.detailsRight} w-[219px] font-cormorant font-bold text-[#eeeeeb] text-[13px] tracking-[1.30px] leading-[13.5px]`}
                            >
                                {item.details.split("\n").map((line, lineIndex) => (
                                    <span key={`${line}-${lineIndex}`}>
                                        {line}
                                        {lineIndex < item.details.split("\n").length - 1 && <br />}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}

                <img
                    className="absolute top-[1658px] left-[113px] w-[9px] h-[66px] opacity-40"
                    alt=""
                    aria-hidden="true"
                    src={line1}
                />
                <img
                    className="top-[1742px] w-[11px] h-[63px] absolute left-[110px] opacity-40"
                    alt=""
                    aria-hidden="true"
                    src={line2}
                />
                <img
                    className="top-[1830px] w-2 h-16 absolute left-[110px] opacity-40"
                    alt=""
                    aria-hidden="true"
                    src={line3}
                />
                <img src={littleHeart} className="!absolute !top-[1638px] !left-[101px] !w-[17px] !h-[17px] !aspect-[1]" alt="Heart" />
                <img src={littleHeart} className="!top-[1723px] !left-28 !w-[18px] !h-[18px] !absolute !aspect-[1]" alt="Heart" />
                <img src={littleHeart} className="!top-[1808px] !left-[100px] !w-[17px] !h-[17px] !absolute !aspect-[1]" alt="Heart" />
                <img src={littleHeart} className="!top-[1895px] !left-[110px] !w-[18px] !h-[18px] !absolute !aspect-[1]" alt="Heart" />
            </section>
            <section aria-labelledby="dresscode-title">
                <h2
                    id="dresscode-title"
                    className="absolute top-[2010px] left-[calc(50.00%_-_120px)] w-[235px] font-cormorant font-bold text-[#7e7c3e] text-[26px] text-center tracking-[0] leading-[31.2px] whitespace-nowrap"
                >
                    ДРЕСС—КОД
                </h2>
                <p className="absolute w-[calc(100%_-_48px)] top-[2059px] left-6 font-ebgaramond font-normal text-[#7d7662] text-[21px] text-center tracking-[2.10px] leading-[23.1px]">
                    <span className="font-medium tracking-[0.44px]">
                        Будем благодарны
                    </span>
                    <span className="font-cormorant font-medium tracking-[0.44px]">
                        ,
                    </span>
                    <span className="font-medium tracking-[0.44px]">
                        {" "}
                        если вы сможете добавить в ваш образ элементы в данной цветовой
                        палитре
                    </span>
                    <span className="font-cormorant font-medium tracking-[0.44px]">
                        :
                    </span>
                </p>
                <div aria-label="Цветовая палитра дресс-кода" className="contents">
                    {paletteColors.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.className} absolute top-[2187px] w-[70px] h-[70px] rounded-[35px]`}
                        />
                    ))}
                </div>
            </section>
            <section aria-labelledby="details-title">
                <div className="w-full top-[2298px] h-[303px] absolute left-0 bg-[#7e7c3e]" />
                <h2
                    id="details-title"
                    className="absolute top-[2336px] left-[calc(50.00%_-_120px)] w-[235px] font-cormorant font-bold text-[#eeeeeb] text-[26px] text-center tracking-[0] leading-[31.2px] whitespace-nowrap"
                >
                    ДЕТАЛИ
                </h2>
                <p className="absolute top-[2385px] left-6 w-[327px] font-ebgaramond font-normal text-[#eeeeeb] text-[22px] text-center tracking-[2.20px] leading-[23.5px]">
                    <span className="font-medium tracking-[0.48px]">
                        Если вы вдруг ломаете голову над подарком — у нас есть универсальная
                        идея
                    </span>
                    <span className="font-cormorant font-medium tracking-[0.48px]">
                        :
                    </span>
                    <span className="font-medium tracking-[0.48px]">
                        {" "}
                        вклад в бюджет нашей молодой семьи
                    </span>
                </p>
                <img src={littleHeart} className="left-[152px] top-[2520px] w-5 h-5 absolute aspect-[1]" alt="Heart" />
                <img src={littleHeart} className="left-[177px] top-[2520px] w-5 h-5 absolute aspect-[1]" alt="Heart" />
                <img src={littleHeart} className="left-[202px] top-[2520px] w-5 h-5 absolute aspect-[1]" alt="Heart" />
            </section>
            <section aria-labelledby="flowers-note-title">
                <h2 id="flowers-note-title" className="sr-only">
                    Пожелание о цветах
                </h2>
                <img
                    className="absolute top-[2663px] left-[calc(50%_-_101px)] w-[202px] opacity-40 h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <img
                    className="w-[240px] top-[2690px] left-[calc(50%_-_120px)] opacity-40 absolute h-px object-cover"
                    alt=""
                    aria-hidden="true"
                    src={horizontalLine}
                />
                <p className="absolute w-[calc(100%_-_58px)] left-[26px] bottom-[653px] font-denistina font-normal text-[#7e7c3e] text-2xl text-center tracking-[0] leading-[26.4px]">
                    Ваше присутствие <br />
                    украсит этот день ярче любых цветов!
                </p>
            </section>
            <div className="absolute w-[calc(100%_+_11px)] top-[2675px] h-[398px] aspect-[1] object-cover">
                <img
                    className="w-full h-full object-cover"
                    alt="Фотография пары"
                    src={img21}
                />
            </div>
            <footer>
                <div className="w-full bottom-0 h-[216px] absolute left-0 bg-[#7e7c3e]" />
                <p className="absolute left-[62px] bottom-[308px] w-[241px] rotate-[3.90deg] font-denistina font-normal text-[#7e7c3e] text-[31px] text-center tracking-[0] leading-[37.2px]">
                    С любовью, Юлия и Артём
                </p>
                <img
                    className="absolute h-auto top-[3000px] right-8 w-[72px]"
                    alt=""
                    aria-hidden="true"
                    src={heartSvg}
                />
                <p className="absolute w-[calc(100%_-_48px)] left-6 bottom-[41px] font-ebgaramond font-normal text-[#eeeeeb] text-[22px] text-center tracking-[2.20px] leading-[23.5px]">
                    <span className="font-medium tracking-[0.48px]">Пожалуйста</span>
                    <span className="font-cormorant tracking-[0.48px]">
                        ,
                    </span>
                    <span className="font-ebgaramond tracking-[0.48px]">
                        &nbsp;
                    </span>
                    <span className="font-medium tracking-[0.48px]">
                        подтвердите своё присутствие в течение недели после получения этого
                        приглашения
                    </span>
                    <span className="font-cormorant tracking-[0.48px]">
                        .
                    </span>
                    <span className="font-ebgaramond tracking-[0.48px]">
                        &nbsp;
                    </span>
                    <span className="font-medium tracking-[0.48px]">
                        По всем вопросам вы можете обращаться к жениху и невесте
                    </span>
                </p>
            </footer>
        </main>
    );
};
