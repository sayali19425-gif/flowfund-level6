# FlowFund — Fund with Proof, Not Faith

> A decentralized milestone-based funding platform built on Stellar & Soroban Smart Contracts

![Uptime](https://img.shields.io/badge/uptime-100%25-brightgreen)
![Network](https://img.shields.io/badge/network-Stellar%20Testnet-blue)
![Commits](https://img.shields.io/badge/commits-40%2B-purple)
![License](https://img.shields.io/badge/license-MIT-orange)

---

## 🌐 Live Demo
👉 **[https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app/)**

## Metrics dashboard
<img width="1909" height="865" alt="Screenshot 2026-03-26 220225" src="https://github.com/user-attachments/assets/b6e61965-1bb3-445b-8c95-92b9c4eaaae3" />

<img width="1919" height="870" alt="Screenshot 2026-03-26 220242" src="https://github.com/user-attachments/assets/a6823039-351f-40a3-be22-82dc243ffaf1" />

---

## 📌 What is FlowFund?

FlowFund is a production-ready decentralized application where:
- **Creators** submit projects with milestone-based funding goals
- **Funders** fund projects with XLM and approve milestones
- **Payments** are released only when milestones are verified — trustless, transparent, on-chain
- **All transactions are gasless** via Stellar Fee Bump sponsorship

---

## ✅ Level 6 Requirements Checklist

| Requirement | Status | Proof |
|---|---|---|
| 30+ verified active users | ✅ | See user wallet addresses below |
| Metrics dashboard live | ✅ | [View Dashboard](https://flowfund-level6.vercel.app) → Dashboard tab |
| Security checklist completed | ✅ | [SECURITY.md](./SECURITY.md) |
| Monitoring active | ✅ | Sentry + UptimeRobot (screenshots below) |
| Data indexing implemented | ✅ | 4 indexes on Supabase (see below) |
| Full documentation | ✅ | README + docs/ folder |
| Community contribution | ✅ | [stellar/js-stellar-sdk #1350](https://github.com/stellar/js-stellar-sdk/issues/1350) |
| Advanced feature implemented | ✅ | Fee Sponsorship — Gasless transactions |
| 15+ meaningful commits | ✅ | 40+ commits on main branch |

---

## 👥 Active Users (30+ Verified)

### Live User Responses Sheet
👉 **[View Google Sheet — Live User Data](https://docs.google.com/spreadsheets/d/1CgcM3lSJhEdhpaHWm3pluOP7oCRn2xs_d8ilSLIK2sQ/edit?usp=sharing)**

> This sheet updates automatically as new users submit the form.
> Mentor can verify user count and wallet addresses in real time.

### User Registration Form
👉 **[Register as FlowFund User](https://forms.gle/K7hG4CW9JtpPufgK8)**

### Current Stats
- Total responses: updating live in sheet
- Sheet columns: Name, Wallet Address, Role used, Date

Table 1 - New users data
| #  | Name                   | Email                                                                           | Wallet Address                                           | Feedback          | Testnet Link                                                                                                                                                                                                         |
| -- | ---------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Vaibhavi Jadhav        | [vaibhavijadhav326@gmail.com](mailto:vaibhavijadhav326@gmail.com)               | GDBIJAOFPMGQWDUUQTJ3YFHI44MWHQHPALJQG7ZDA7D5WWEDKJYA4OHA | Smooth experience | [https://stellar.expert/explorer/testnet/account/GDBIJAOFPMGQWDUUQTJ3YFHI44MWHQHPALJQG7ZDA7D5WWEDKJYA4OHA](https://stellar.expert/explorer/testnet/account/GDBIJAOFPMGQWDUUQTJ3YFHI44MWHQHPALJQG7ZDA7D5WWEDKJYA4OHA) |
| 2  | Yojit Giri             | [yojit.giri24@mmit.edu.in](mailto:yojit.giri24@mmit.edu.in)                     | GBLUQBHZGX5PM2A6FX45L3ONQVL56RNEUJ2BUSYM47A5N3Z37VPJPQ2Y | Great feedback    | [https://stellar.expert/explorer/testnet/account/GBLUQBHZGX5PM2A6FX45L3ONQVL56RNEUJ2BUSYM47A5N3Z37VPJPQ2Y](https://stellar.expert/explorer/testnet/account/GBLUQBHZGX5PM2A6FX45L3ONQVL56RNEUJ2BUSYM47A5N3Z37VPJPQ2Y) |
| 3  | Dnyaneshwari Parjane   | [dnyaneshwari.parjane24@mmit.edu.in](mailto:dnyaneshwari.parjane24@mmit.edu.in) | GA5JVZLQAMAKQ4FVMV5XAX3EKHPIR2AHMH6FSNCWKTB664A7NMTT3NPH | Best experience   | [https://stellar.expert/explorer/testnet/account/GA5JVZLQAMAKQ4FVMV5XAX3EKHPIR2AHMH6FSNCWKTB664A7NMTT3NPH](https://stellar.expert/explorer/testnet/account/GA5JVZLQAMAKQ4FVMV5XAX3EKHPIR2AHMH6FSNCWKTB664A7NMTT3NPH) |
| 4  | Omkar Gopale           | [gopaleomkar0812@gmail.com](mailto:gopaleomkar0812@gmail.com)                   | GDH7MUZH3VFZNG44WHMPIV4XN2BAGJTLF6C64PUXYGDZ6N4YCF4S4WQL | Good web          | [https://stellar.expert/explorer/testnet/account/GDH7MUZH3VFZNG44WHMPIV4XN2BAGJTLF6C64PUXYGDZ6N4YCF4S4WQL](https://stellar.expert/explorer/testnet/account/GDH7MUZH3VFZNG44WHMPIV4XN2BAGJTLF6C64PUXYGDZ6N4YCF4S4WQL) |
| 5  | Prasad Davre           | [clashofclansom7@gmail.com](mailto:clashofclansom7@gmail.com)                   | GBVMBCHMLBVS3DA6NJFLMVCEWZZV2L6WHG644CGODJFSAUPB67TTTGC7 | Wants funding     | [https://stellar.expert/explorer/testnet/account/GBVMBCHMLBVS3DA6NJFLMVCEWZZV2L6WHG644CGODJFSAUPB67TTTGC7](https://stellar.expert/explorer/testnet/account/GBVMBCHMLBVS3DA6NJFLMVCEWZZV2L6WHG644CGODJFSAUPB67TTTGC7) |
| 6  | Sujata Gade            | [heydaywithmau@gmail.com](mailto:heydaywithmau@gmail.com)                       | GCM545H3IP2SYJDNDKLAUQRMMAQ5CN34V6VD5Y74WOYZTVRPX3SJXSP7 | Good              | [https://stellar.expert/explorer/testnet/account/GCM545H3IP2SYJDNDKLAUQRMMAQ5CN34V6VD5Y74WOYZTVRPX3SJXSP7](https://stellar.expert/explorer/testnet/account/GCM545H3IP2SYJDNDKLAUQRMMAQ5CN34V6VD5Y74WOYZTVRPX3SJXSP7) |
| 7  | Khushi Dare            | [bunnyshorts08@gmail.com](mailto:bunnyshorts08@gmail.com)                       | GCP4RV3JVFCMHANSQUC5XGMMG3VEFEWGAGYFR7VMQVS5A5FFKGHUSINK | No feedback       | [https://stellar.expert/explorer/testnet/account/GCP4RV3JVFCMHANSQUC5XGMMG3VEFEWGAGYFR7VMQVS5A5FFKGHUSINK](https://stellar.expert/explorer/testnet/account/GCP4RV3JVFCMHANSQUC5XGMMG3VEFEWGAGYFR7VMQVS5A5FFKGHUSINK) |
| 8  | Neil Medgule           | [neil191009@gmail.com](mailto:neil191009@gmail.com)                             | GCAZ3JZACJAR7RONXGAS6BQKVEKNVBPVNLNWK6NGBC4A2ZNKVUQ6C4JD | Nice experience   | [https://stellar.expert/explorer/testnet/account/GCAZ3JZACJAR7RONXGAS6BQKVEKNVBPVNLNWK6NGBC4A2ZNKVUQ6C4JD](https://stellar.expert/explorer/testnet/account/GCAZ3JZACJAR7RONXGAS6BQKVEKNVBPVNLNWK6NGBC4A2ZNKVUQ6C4JD) |
| 9  | Santosh Jadhav         | [jadhavsantoshb1@gmail.com](mailto:jadhavsantoshb1@gmail.com)                   | GA4OS45WHOC5NZAOTFF7O3AOZUYKLXHKRUDYQDI5XUYHWJYZVIDC7S6K | Good              | [https://stellar.expert/explorer/testnet/account/GA4OS45WHOC5NZAOTFF7O3AOZUYKLXHKRUDYQDI5XUYHWJYZVIDC7S6K](https://stellar.expert/explorer/testnet/account/GA4OS45WHOC5NZAOTFF7O3AOZUYKLXHKRUDYQDI5XUYHWJYZVIDC7S6K) |
| 10 | Vaishnavi Pusdekar     | [sanupusdekar@gmail.com](mailto:sanupusdekar@gmail.com)                         | GAG234U66W25HS6EN4OYTD7RZWUKGMF5JGH5EWW46UEJTE7YUCJJTULE | Nice website      | [https://stellar.expert/explorer/testnet/account/GAG234U66W25HS6EN4OYTD7RZWUKGMF5JGH5EWW46UEJTE7YUCJJTULE](https://stellar.expert/explorer/testnet/account/GAG234U66W25HS6EN4OYTD7RZWUKGMF5JGH5EWW46UEJTE7YUCJJTULE) |
| 11 | Chinmayee Kobal        | [chinmayeekobal04@gmail.com](mailto:chinmayeekobal04@gmail.com)                 | GCGEPKSFDKATFV57UAUZJOGRG4DWYURWIZF5YEKEH4QXNRML245OF2OJ | Nice experience   | [https://stellar.expert/explorer/testnet/account/GCGEPKSFDKATFV57UAUZJOGRG4DWYURWIZF5YEKEH4QXNRML245OF2OJ](https://stellar.expert/explorer/testnet/account/GCGEPKSFDKATFV57UAUZJOGRG4DWYURWIZF5YEKEH4QXNRML245OF2OJ) |
| 12 | Vivek Kobal            | [vivekskobal275@gmail.com](mailto:vivekskobal275@gmail.com)                     | GAQLYOR5DCSYF7MNAREMA6JGU52ZKGP54NLR2COTOFAYTLF6NVVC7XOH | Nice experience   | [https://stellar.expert/explorer/testnet/account/GAQLYOR5DCSYF7MNAREMA6JGU52ZKGP54NLR2COTOFAYTLF6NVVC7XOH](https://stellar.expert/explorer/testnet/account/GAQLYOR5DCSYF7MNAREMA6JGU52ZKGP54NLR2COTOFAYTLF6NVVC7XOH) |
| 13 | Nayan Palande          | [npalande2106@gmail.com](mailto:npalande2106@gmail.com)                         | GCLTDFYMDJZYLDKETB6Z24CCPHGFQS7NRZFJWT4AUXQZ5SF2BJOME7CN | Great platform    | [https://stellar.expert/explorer/testnet/account/GCLTDFYMDJZYLDKETB6Z24CCPHGFQS7NRZFJWT4AUXQZ5SF2BJOME7CN](https://stellar.expert/explorer/testnet/account/GCLTDFYMDJZYLDKETB6Z24CCPHGFQS7NRZFJWT4AUXQZ5SF2BJOME7CN) |
| 14 | Ujawala Naikare        | [ujawalanaikqre144@gmail.com](mailto:ujawalanaikqre144@gmail.com)               | GBNPQXKGMVPBGJUT2VTKOMWNG2JAGBG7DDOH4XY6CCO55NTTV5UKL3EQ | Likes funding     | [https://stellar.expert/explorer/testnet/account/GBNPQXKGMVPBGJUT2VTKOMWNG2JAGBG7DDOH4XY6CCO55NTTV5UKL3EQ](https://stellar.expert/explorer/testnet/account/GBNPQXKGMVPBGJUT2VTKOMWNG2JAGBG7DDOH4XY6CCO55NTTV5UKL3EQ) |
| 15 | Sanvi Naikare          | [sanvinaikare176@gmail.com](mailto:sanvinaikare176@gmail.com)                   | GBLPM5I4DCKOWWVUPXKF5XONZSD22ZF3GHNDHK6ZB7PSQLIPPINXNENC | Nice              | [https://stellar.expert/explorer/testnet/account/GBLPM5I4DCKOWWVUPXKF5XONZSD22ZF3GHNDHK6ZB7PSQLIPPINXNENC](https://stellar.expert/explorer/testnet/account/GBLPM5I4DCKOWWVUPXKF5XONZSD22ZF3GHNDHK6ZB7PSQLIPPINXNENC) |
| 16 | Vandana Nighot         | [Vandananighot52@gmail.com](mailto:Vandananighot52@gmail.com)                   | GBTCO5WSTBEMWTLI7CXNDMFHJV7NTIPIAHTPRRNW3LC5HDNZI6M5JAQC | No feedback       | [https://stellar.expert/explorer/testnet/account/GBTCO5WSTBEMWTLI7CXNDMFHJV7NTIPIAHTPRRNW3LC5HDNZI6M5JAQC](https://stellar.expert/explorer/testnet/account/GBTCO5WSTBEMWTLI7CXNDMFHJV7NTIPIAHTPRRNW3LC5HDNZI6M5JAQC) |
| 17 | Sam                    | [nevsesamruddhi@gmail.con](mailto:nevsesamruddhi@gmail.con)                     | GCWHSFPEKYG5OYYQT2M5VRRVM3LSCXACMBNKSZUTH7XCIUGQTGFDAYWD | Amazing           | [https://stellar.expert/explorer/testnet/account/GCWHSFPEKYG5OYYQT2M5VRRVM3LSCXACMBNKSZUTH7XCIUGQTGFDAYWD](https://stellar.expert/explorer/testnet/account/GCWHSFPEKYG5OYYQT2M5VRRVM3LSCXACMBNKSZUTH7XCIUGQTGFDAYWD) |
| 18 | Aishwarya Katke        | [aishwaryakatke466@gmail.com](mailto:aishwaryakatke466@gmail.com)               | GCJL5UOTHAW26F7BWZ7UF2DAELNM6JRH2OSZT3HNRTZTW7BJ25LU5YNK | Nice web          | [https://stellar.expert/explorer/testnet/account/GCJL5UOTHAW26F7BWZ7UF2DAELNM6JRH2OSZT3HNRTZTW7BJ25LU5YNK](https://stellar.expert/explorer/testnet/account/GCJL5UOTHAW26F7BWZ7UF2DAELNM6JRH2OSZT3HNRTZTW7BJ25LU5YNK) |
| 19 | Vaishnavi Tutare       | [vaishuuututare@gamil.com](mailto:vaishuuututare@gamil.com)                     | GBWK7STOZY32KG6S7HMHX52EDJITFBZYMP5PGI4TZE7AITDNR3KKRUAE | No feedback       | [https://stellar.expert/explorer/testnet/account/GBWK7STOZY32KG6S7HMHX52EDJITFBZYMP5PGI4TZE7AITDNR3KKRUAE](https://stellar.expert/explorer/testnet/account/GBWK7STOZY32KG6S7HMHX52EDJITFBZYMP5PGI4TZE7AITDNR3KKRUAE) |
| 20 | Shreya Sutare          | [shreyaish0711@gmail.com](mailto:shreyaish0711@gmail.com)                       | GCRFD2CXSJCBSQVR4ERVFQ2WMYU7WMNPGEUXBQ4YVQQWAPQ4ZUNFQKIF | Good website      | [https://stellar.expert/explorer/testnet/account/GCRFD2CXSJCBSQVR4ERVFQ2WMYU7WMNPGEUXBQ4YVQQWAPQ4ZUNFQKIF](https://stellar.expert/explorer/testnet/account/GCRFD2CXSJCBSQVR4ERVFQ2WMYU7WMNPGEUXBQ4YVQQWAPQ4ZUNFQKIF) |
| 21 | Atharva Bomble         | [srtgamers001@gmail.com](mailto:srtgamers001@gmail.com)                         | GCLDPNQUZBS4PHY77TDN3FAXKNUJFPVJVVKMQFIRFDXAWY3V4CXUFW45 | No feedback       | [https://stellar.expert/explorer/testnet/account/GCLDPNQUZBS4PHY77TDN3FAXKNUJFPVJVVKMQFIRFDXAWY3V4CXUFW45](https://stellar.expert/explorer/testnet/account/GCLDPNQUZBS4PHY77TDN3FAXKNUJFPVJVVKMQFIRFDXAWY3V4CXUFW45) |
| 22 | Riya Arora             | [riyaarora09003@gmail.com](mailto:riyaarora09003@gmail.com)                     | GAXQ33SNINAT4KCKQ3LLK5O6N3555TRDNHSCDT2TDZ43TL6R6NLV3DVH | Good              | [https://stellar.expert/explorer/testnet/account/GAXQ33SNINAT4KCKQ3LLK5O6N3555TRDNHSCDT2TDZ43TL6R6NLV3DVH](https://stellar.expert/explorer/testnet/account/GAXQ33SNINAT4KCKQ3LLK5O6N3555TRDNHSCDT2TDZ43TL6R6NLV3DVH) |
| 23 | Nilima Gopale          | [nilimagopale08@gmail.com](mailto:nilimagopale08@gmail.com)                     | GCZ6E526YTZMCRRMYJI6BHDB4SGP3BK3SQQZUZQKNGWD6MA2Y6YRXXSE | No feedback       | [https://stellar.expert/explorer/testnet/account/GCZ6E526YTZMCRRMYJI6BHDB4SGP3BK3SQQZUZQKNGWD6MA2Y6YRXXSE](https://stellar.expert/explorer/testnet/account/GCZ6E526YTZMCRRMYJI6BHDB4SGP3BK3SQQZUZQKNGWD6MA2Y6YRXXSE) |
| 24 | Madhura Patil          | [madhurapatil080604@gmail.com](mailto:madhurapatil080604@gmail.com)             | GDT2GTVRG7WXIYWKT3AJHAALCVLQKXNA5I4FRKLQWUKOEKKPGYOJ4DJL | Good              | [https://stellar.expert/explorer/testnet/account/GDT2GTVRG7WXIYWKT3AJHAALCVLQKXNA5I4FRKLQWUKOEKKPGYOJ4DJL](https://stellar.expert/explorer/testnet/account/GDT2GTVRG7WXIYWKT3AJHAALCVLQKXNA5I4FRKLQWUKOEKKPGYOJ4DJL) |
| 25 | Sayali Mane            | [sayali2006@gmail.com](mailto:sayali2006@gmail.com)                             | GCLBSD55OC5NYO36NP6RUJH3R4N2ZULQBGPXO63GN7M5SPFDDVSQGTRY | No feedback       | [https://stellar.expert/explorer/testnet/account/GCLBSD55OC5NYO36NP6RUJH3R4N2ZULQBGPXO63GN7M5SPFDDVSQGTRY](https://stellar.expert/explorer/testnet/account/GCLBSD55OC5NYO36NP6RUJH3R4N2ZULQBGPXO63GN7M5SPFDDVSQGTRY) |
| 26 | Krish Gunjal           | [alexanderytshorts08@gmail.com](mailto:alexanderytshorts08@gmail.com)           | GB5LBUZVOVBKZJEIMCZW7RQ7VHSMRCJ222YQDABGEOBCQA6UL4QC6RTZ | Nice experience   | [https://stellar.expert/explorer/testnet/account/GB5LBUZVOVBKZJEIMCZW7RQ7VHSMRCJ222YQDABGEOBCQA6UL4QC6RTZ](https://stellar.expert/explorer/testnet/account/GB5LBUZVOVBKZJEIMCZW7RQ7VHSMRCJ222YQDABGEOBCQA6UL4QC6RTZ) |
| 27 | Janhavi                | [janhavilipare9948@gmail.com](mailto:janhavilipare9948@gmail.com)               | GCSX7FR6XYMAPHEJASF2RA3BHQV3PM4DKVW3FTSQV76IIR7GYIGJSW3W | Unique idea       | [https://stellar.expert/explorer/testnet/account/GCSX7FR6XYMAPHEJASF2RA3BHQV3PM4DKVW3FTSQV76IIR7GYIGJSW3W](https://stellar.expert/explorer/testnet/account/GCSX7FR6XYMAPHEJASF2RA3BHQV3PM4DKVW3FTSQV76IIR7GYIGJSW3W) |
| 28 | Omkar Jagtap           | [omkarjagtap2105@gmail.com](mailto:omkarjagtap2105@gmail.com)                   | GAF57COCDLHE273YGSB6YUIDHWU53SJUJ522CLEDVH4SFPAWRR2WTAFZ | Good              | [https://stellar.expert/explorer/testnet/account/GAF57COCDLHE273YGSB6YUIDHWU53SJUJ522CLEDVH4SFPAWRR2WTAFZ](https://stellar.expert/explorer/testnet/account/GAF57COCDLHE273YGSB6YUIDHWU53SJUJ522CLEDVH4SFPAWRR2WTAFZ) |
| 29 | Nirupam Karankale      | [ndkindia09@gmail.com](mailto:ndkindia09@gmail.com)                             | GDVS2M7YZCDK7ABQ3U7J6LIE6INQARZIJGLKC7LT6LSHXRKBTLIZPCEN | Liked app         | [https://stellar.expert/explorer/testnet/account/GDVS2M7YZCDK7ABQ3U7J6LIE6INQARZIJGLKC7LT6LSHXRKBTLIZPCEN](https://stellar.expert/explorer/testnet/account/GDVS2M7YZCDK7ABQ3U7J6LIE6INQARZIJGLKC7LT6LSHXRKBTLIZPCEN) |
| 30 | Diksha Sawant          | [sawantdiksha83@gmail.com](mailto:sawantdiksha83@gmail.com)                     | GDF3G2EIC2ZBVOFSLJ67X4LNPR4DHNH677DCV57ZW3YCH3YQELHTO5WF | Very good         | [https://stellar.expert/explorer/testnet/account/GDF3G2EIC2ZBVOFSLJ67X4LNPR4DHNH677DCV57ZW3YCH3YQELHTO5WF](https://stellar.expert/explorer/testnet/account/GDF3G2EIC2ZBVOFSLJ67X4LNPR4DHNH677DCV57ZW3YCH3YQELHTO5WF) |
| 31 | Maitreyee              | [maitreyeehambir@gmail.com](mailto:maitreyeehambir@gmail.com)                   | GCUGNGZAMRDVO3WAP66MGQ2FHNN67ZSCQHTQHHIJMUGTULWAEEMWYU64 | Very nice         | [https://stellar.expert/explorer/testnet/account/GCUGNGZAMRDVO3WAP66MGQ2FHNN67ZSCQHTQHHIJMUGTULWAEEMWYU64](https://stellar.expert/explorer/testnet/account/GCUGNGZAMRDVO3WAP66MGQ2FHNN67ZSCQHTQHHIJMUGTULWAEEMWYU64) |
| 32 | Gauri Jadhav           | [jadhavgauri347@gmail.com](mailto:jadhavgauri347@gmail.com)                     | GAHWHBKOQRUF3NY5BLRAFPEBWMN2RAAB73F3IPSGIRRIRX6CZ3PERSCH | UI issue          | [https://stellar.expert/explorer/testnet/account/GAHWHBKOQRUF3NY5BLRAFPEBWMN2RAAB73F3IPSGIRRIRX6CZ3PERSCH](https://stellar.expert/explorer/testnet/account/GAHWHBKOQRUF3NY5BLRAFPEBWMN2RAAB73F3IPSGIRRIRX6CZ3PERSCH) |
| 33 | Sujay                  | [Sujaykhupase@gmail.com](mailto:Sujaykhupase@gmail.com)                         | GDTWSWGXHNGIQFENOTMCLPOLZNQGPTZTSXQBEYA7ZSSIPJQBHH3OCFBR | Helpful           | [https://stellar.expert/explorer/testnet/account/GDTWSWGXHNGIQFENOTMCLPOLZNQGPTZTSXQBEYA7ZSSIPJQBHH3OCFBR](https://stellar.expert/explorer/testnet/account/GDTWSWGXHNGIQFENOTMCLPOLZNQGPTZTSXQBEYA7ZSSIPJQBHH3OCFBR) |
| 34 | Aditya Gahire          | [adityagahire@gmail.com](mailto:adityagahire@gmail.com)                         | GBO57NEMG5HQIO47A2ZDHSGHN7G5RTMCRMGWXVDYPQGWBKLSSHJEWX35 | Smooth            | [https://stellar.expert/explorer/testnet/account/GBO57NEMG5HQIO47A2ZDHSGHN7G5RTMCRMGWXVDYPQGWBKLSSHJEWX35](https://stellar.expert/explorer/testnet/account/GBO57NEMG5HQIO47A2ZDHSGHN7G5RTMCRMGWXVDYPQGWBKLSSHJEWX35) |
| 35 | Sudhakar Sutar         | [sudhakarsutar101@gmail.com](mailto:sudhakarsutar101@gmail.com)                 | GALULA4PSYS4AVX7AIUDZ5IVUUWJAGT4BECMICA3JQMCO3HICKQEKJXS | Good UI           | [https://stellar.expert/explorer/testnet/account/GALULA4PSYS4AVX7AIUDZ5IVUUWJAGT4BECMICA3JQMCO3HICKQEKJXS](https://stellar.expert/explorer/testnet/account/GALULA4PSYS4AVX7AIUDZ5IVUUWJAGT4BECMICA3JQMCO3HICKQEKJXS) |
| 36 | Krishna                | [krishnarakshe0812@gmail.com](mailto:krishnarakshe0812@gmail.com)               | GB4BMVNNWKLWQKXQ7CAOX6YWT6NI7WMEDZQZ26IYQDL4JKCQS7PJIEET | Needs explanation | [https://stellar.expert/explorer/testnet/account/GB4BMVNNWKLWQKXQ7CAOX6YWT6NI7WMEDZQZ26IYQDL4JKCQS7PJIEET](https://stellar.expert/explorer/testnet/account/GB4BMVNNWKLWQKXQ7CAOX6YWT6NI7WMEDZQZ26IYQDL4JKCQS7PJIEET) |


User Feedback: : Fixed ✅

User 1 : Feedback : "Gasless send needs more explanation" → add help text 

<img width="1915" height="856" alt="image" src="https://github.com/user-attachments/assets/c0424b2f-472c-4532-b4a1-0fb97c061101" />

User 2 : Feedback : "Dashboard tab is hard to find" → improve navbar styling

<img width="1915" height="101" alt="image" src="https://github.com/user-attachments/assets/1b2a6df7-4fa0-4a05-b990-6ab67874cdce" />
<img width="1905" height="871" alt="image" src="https://github.com/user-attachments/assets/78068821-60f2-4c76-ad3e-6fc770934832" />

### Table 2 — User Feedback Implementation
Commit Ids:
| User Name | User Email | User Wallet Address | Feedback Given | Commit ID |
|---|---|---|---|---|
| User 1 | krishnarakshe0812@gmail.com | GB4BMVNNWKLWQKXQ7CAOX6YWT6NI7WMEDZQZ26IYQDL4JKCQS7PJIEET | "Gasless send needs more explanation" | 439c031 |
| User 2 | jadhavgauri347@gmail.com | GAHWHBKOQRUF3NY5BLRAFPEBWMN2RAAB73F3IPSGIRRIRX6CZ3PERSCH | "Dashboard tab is hard to find" | aa55275 |
```
## ⚡ Advanced Feature — Fee Sponsorship (Gasless Transactions)

### What it does
Users pay **zero XLM fees** for transactions. FlowFund's sponsor account covers all fees using Stellar's **Fee Bump Transaction** mechanism.

### How it works
1. User builds and signs an inner transaction
2. Sponsor wraps it in a `FeeBumpTransaction`
3. Sponsor signs and pays the fee
4. Transaction submitted to Stellar Horizon

### Implementation
```js
// frontend/src/stellar/feeSponsor.js
const feeBumpTx = TransactionBuilder.buildFeeBumpTransaction(
  sponsorKeypair,   // sponsor pays the fee
  "200",            // max fee in stroops
  innerTx,          // user's signed transaction
  Networks.TESTNET
);
feeBumpTx.sign(sponsorKeypair);
const result = await server.submitTransaction(feeBumpTx);
```

### Proof of implementation
- File: `frontend/src/stellar/feeSponsor.js`
- File: `frontend/src/components/GaslessPayment.jsx`
- Live on: [https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app) → Gasless Send tab
- Verified transaction on Stellar Explorer:
  `https://stellar.expert/explorer/testnet/tx/2c3a2fd6050e69302d41238667a623fd511dc17d9b3110147b714d1d0ef080ac`

---

## 📊 Metrics Dashboard

**Live dashboard** showing real-time stats from Supabase:

| Metric | Value |
|---|---|
| Total Projects | 9+ |
| Funded Projects | 7+ |
| Completed Projects | 7+ |
| Total XLM Raised | 1378+ XLM |
| Active Users | 8+ |
| App Uptime | 100% |

👉 View live: [https://flowfund-level6.vercel.app](https://flowfund-level6.vercel.app) → click **Dashboard** in navbar

---

## 🔒 Security Checklist

Full checklist: [SECURITY.md](./SECURITY.md)

| Check | Status |
|---|---|
| Input validation on all forms | ✅ |
| Stellar address validation (G..., 56 chars) | ✅ |
| All secrets in .env — never committed | ✅ |
| .env.example provided | ✅ |
| npm audit — 0 vulnerabilities | ✅ |
| HTTPS enforced via Vercel | ✅ |
| No private keys in source code | ✅ |
| Sentry error monitoring active | ✅ |
| UptimeRobot uptime monitoring active | ✅ |

---

## 📡 Monitoring

### Sentry — Error Tracking
- Platform: [sentry.io](https://sentry.io)
- Project: `flowfund` (javascript-react)
- Captures: all runtime errors, performance traces, session replays

<img width="1918" height="863" alt="Screenshot 2026-03-26 215512" src="https://github.com/user-attachments/assets/ad48370c-a576-4167-9dea-06f35de431d2" />


### UptimeRobot — Uptime Monitoring
- URL monitored: `https://flowfund-level6.vercel.app`
- Check interval: every 5 minutes
- Current uptime: **100%**
- Incidents: **0**
- 
<img width="1906" height="865" alt="Screenshot 2026-03-26 215807" src="https://github.com/user-attachments/assets/184ba70f-2142-4d82-8f60-2ca33746e8d3" />

<img width="1911" height="868" alt="Screenshot 2026-03-26 215909" src="https://github.com/user-attachments/assets/42cda676-9bd2-42f5-89c9-e6ba317a747b" />

---

## 🗄️ Data Indexing

4 indexes added to Supabase PostgreSQL for faster queries:

```sql
CREATE INDEX IF NOT EXISTS idx_projects_creator
  ON projects(creator);

CREATE INDEX IF NOT EXISTS idx_projects_created_at
  ON projects(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_projects_funded
  ON projects(funded);

CREATE INDEX IF NOT EXISTS idx_projects_completed_at
  ON projects(completed_at);
```

Full migration history: [MIGRATIONS.md](./MIGRATIONS.md)

**Result:** Query time reduced from O(n) full table scan to O(log n) indexed lookup.

---

## 🌍 Community Contribution

**Contributed to Stellar open source ecosystem:**

- 🔗 **[stellar/js-stellar-sdk Issue #1350](https://github.com/stellar/js-stellar-sdk/issues/1350)**
- **Title:** Documentation: Add FeeBumpTransaction code example to README
- **Description:** Suggested adding a clear FeeBumpTransaction code example to the official Stellar JS SDK docs, based on real implementation experience building FlowFund's gasless transaction feature.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Rust + Soroban SDK |
| Frontend | React + Vite |
| Database | Supabase (PostgreSQL) |
| Blockchain | Stellar Testnet |
| Wallet | Freighter |
| Error Monitoring | Sentry |
| Uptime Monitoring | UptimeRobot |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Rust + Soroban CLI
- Freighter Wallet browser extension

### Installation

```bash
# Clone the repo
git clone https://github.com/sayali19425-gif/flowfund-level6.git
cd flowfund-level6

# Install frontend dependencies
cd frontend
npm install

# Copy env file
cp .env.example .env
# Fill in your values in .env
```

### Environment Variables

```env
VITE_SPONSOR_SECRET=your_sponsor_secret_key
VITE_SPONSOR_PUBLIC=your_sponsor_public_key
VITE_HORIZON_URL=https://horizon-testnet.stellar.org
VITE_STELLAR_NETWORK=testnet
VITE_SENTRY_DSN=your_sentry_dsn
```

### Run locally

```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173`

---

## 📁 Project Structure

```
flowfund-level6/
├── contract/              # Soroban smart contract (Rust)
│   └── src/lib.rs         # Milestone escrow logic
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/    # GaslessPayment, Navbar, etc.
│   │   ├── pages/         # Home, Creator, Funder, Dashboard
│   │   └── stellar/       # feeSponsor.js — fee bump logic
│   └── .env.example
├── docs/
│   ├── ARCHITECTURE.md
│   └── API.md
├── SECURITY.md
├── MIGRATIONS.md
├── CONTRIBUTING.md
└── README.md
```

---

## 📄 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Security Checklist](./SECURITY.md)
- [Database Migrations](./MIGRATIONS.md)
- [Community Contribution](./CONTRIBUTING.md)

---

## 🏅 Commit History

40+ meaningful commits including:
- `feat:` — new features (fee bump, dashboard, gasless UI)
- `monitor:` — Sentry and UptimeRobot setup
- `security:` — input validation, audit fixes
- `perf:` — database indexes
- `docs:` — README, architecture, API docs

---

## Community Contribution
- 🔗 [stellar/js-stellar-sdk #1350](https://github.com/stellar/js-stellar-sdk/issues/1350)

## License
MIT
