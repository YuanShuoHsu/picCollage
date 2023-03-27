import styles from "./index.module.scss"

export default function QuestionTwo() {
    return (
        <div className={styles.questionTwo}>
            <p>Question 2</p>
            <ul>
                <li>If you had three months to build anything, what would it be and why?</li>
            </ul>
            <p>Answer:</p>
            <p>我的切入點是：「市場需要哪些產品？」在台灣中小企業大多起家於電子商務領域。作為一名前端工程師，我認為打造電子商務平台是展現個人能力不錯的選擇。從會員註冊、登入、購物車、結帳、訂單管理等基本功能，到組件架構的復用性、圖片懶加載、網頁效能優化以及 SEO 提升等高級技術，都需要精心設計。透過這樣的挑戰，我相信可以在前端開發領域中有所建樹。</p>
            <p>My starting point is, "What products does the market need?" In Taiwan, most small and medium-sized enterprises start with e-commerce. As a frontend engineer, I believe that building an e-commerce platform is a good choice to showcase my abilities. From basic functions such as member registration, login, shopping cart, checkout, order management, to advanced technologies such as component architecture reusability, lazy loading of images, webpage performance optimization, and SEO improvement, they all require careful design. Through such challenges, I believe that I can make a name for myself in the field of frontend development.</p>
        </div>
    )
}
