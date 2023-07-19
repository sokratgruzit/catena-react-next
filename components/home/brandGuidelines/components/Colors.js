import styles from '../styles/Colors.module.css';

export default function Colors() {
  const colors = [
    {
      color: 'CATENA Sky Blue',
      hex: 'Hex:A6D0DD',
      rgb: 'R 166 G 208 B 221',
      cmyk: 'C 34% M 6% Y 10% K 0%',
    },
    {
      color: 'Blue',
      hex: 'HEX:0500ff',
      rgb: 'R 5 G 0 B 255',
      cmyk: 'C 88% M 77% Y 0% K 0%',
    },
    {
      color: 'CATENA Red',
      hex: 'HEX:ff6969',
      rgb: 'R 255 G 205 B 105',
      cmyk: 'C 0% M 74% Y 50% K 0%',
    },
    {
      color: 'Cream',
      hex: 'HEX:FFF3E5',
      rgb: 'R 255 G 255 B 255',
      cmyk: 'C 0% M 0% Y 0% K 0%',
      list: [
        {
          basicColor: 'White',
          basicHex: 'HEX:FFFFFF',
          basicRgb: 'R 255 G 255 B 255',
          basicCmyk: 'C 0% M 0% Y 0% K 0%',
        },
        {
          basicColor: 'Black',
          basicHex: 'HEX:162029',
          basicRgb: 'R 22 G 32 B 41',
          basicCmyk: 'C 83% M 71% Y 58% K 69%',
        },
      ],
    },
  ];
  return (
    <div className={styles.colors}>
      <div className={styles.line}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g opacity='0.6'>
            <path
              opacity='0.6'
              d='M14 16C14 17.77 13.23 19.37 12 20.46C10.9053 21.4541 9.47871 22.0033 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C6.76425 11.0755 7.30469 11.8494 7.9988 12.4706C8.6929 13.0918 9.52171 13.5434 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z'
              fill='#212121'
            />
            <path
              d='M18 8C18.0016 9.3166 17.5695 10.5971 16.7706 11.6436C15.9717 12.6901 14.8504 13.4444 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C9.14956 13.4444 8.02828 12.6901 7.22938 11.6436C6.43048 10.5971 5.99844 9.3166 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z'
              fill='#212121'
            />
            <path
              opacity='0.4'
              d='M22 16C22 19.31 19.31 22 16 22C14.5213 22.0033 13.0947 21.4541 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z'
              fill='#212121'
            />
          </g>
        </svg>
        Color
      </div>
      <div className={styles.collorPallete}>
        <h1 className={styles.title}>Color Palette</h1>
        <div className={styles.pallete}>
          {colors.map((item, index) => {
            return (
              <div key={index} className={styles.content}>
                <div className={styles.contentBox}>
                  <p>{item.color}</p>
                  <p>{item.hex}</p>
                  <p>{item.rgb}</p>
                  <p>{item.cmyk}</p>
                </div>
                <div className={styles.boxes}>
                  {item.list
                    ? item.list.map((nestedItem, nestedIndex) => (
                        <div key={nestedIndex} className={styles.box}>
                          <p>{nestedItem.basicColor}</p>
                          <p>{nestedItem.basicHex}</p>
                          <p>{nestedItem.basicRgb}</p>
                          <p>{nestedItem.basicCmyk}</p>
                        </div>
                      ))
                    : []}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
