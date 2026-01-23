const info = document.getElementById("info");
const gridContainer = document.getElementById("grid-container");
const newGameButton = document.getElementById("newGameButton");
const submitButton = document.getElementById("submitButton");
const shuffleButton = document.getElementById("shuffleButton");
const clues = document.getElementById("clues");
const status = document.getElementById("status");
const share =  document.getElementById("share");
const tooltip = document.getElementById("myTooltip");
const image = document.getElementById("image");
const HintButton = document.getElementById("GetaHintButton");

// let wordsArray = [  "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"  ];

const ashttotara = [
  { 
    god: "Ganesh",
    dev: "गणेश",
    nama: ["गजानन", "गणाध्यक्ष", "विघ्नराज", "विनायक", "द्वैमातुर", "द्विमुख", "प्रमुख", "सुमुख", "कृती", "सुप्रदीप", "सुखनिधि", "सुराध्यक्ष", "सुरारिघ्न", "महागणपति", "मान्य", "महाकाल", "महाबल", "हेरम्ब", "लम्बजठर", "ह्रस्वग्रीव", "महोदर", "मदोत्कट", "मन्त्री", "मङ्गलस्वर", "प्रमध", "प्रमध", "प्राज्ञ", "विघ्नकर्ता", "विघ्नहर्ता", "विश्वनेता", "विराट्पति", "श्रीपति", "वाक्पति", "शृाक्पति", "अश्रितवत्सल", "शश्रितवत्सल", "शीघ्रकारी", "शाश्वत", "बाश्वत", "बलोत्थित", "भवात्मज", "पुराणपुरुष", "पूषा", "पुष्करोत्षिप्तवारी", "अग्रगण्य", "अग्रपूज्य", "अग्रगामी", "मन्त्रकृत्", "चामीकरप्रभ", "सर्व", "सर्वोपास्य", "सर्वकर्ता", "सर्वनेता", "सर्वसिद्धिप्रद", "सिद्धि", "पञ्चहस्त", "पार्वतीनन्दन", "प्रभु", "कुमारगुरु", "अक्षोभ्य", "कुञ्जरासुरभञ्जन", "प्रमोद", "मोदकप्रिय", "कान्तिमान्", "धृतिमान्", "कपित्थपनसप्रिय", "ब्रह्मचारी", "ब्रह्मरूपी", "ब्रह्मविद्यादिदानभू", "जिष्णु", "विष्णुप्रिय", "भक्तजीवित", "जितमन्मथ", "ऐश्वर्यकारण", "ज्यायस्", "यक्षकिन्नरसेवित", "गङ्गासुत", "गणाधीश", "गम्भीरनिनद", "वटु", "अभीष्टवरद", "ज्योतिस्", "भक्तनिधि", "भावगम्य", "मङ्गलप्रद", "अव्यक्त", "अप्राकृतपराक्रम", "सत्यधर्मी", "सखा", "सरसाम्बुनिधि", "महेश", "दिव्याङ्ग", "मणिकिङ्किणीमेखल", "समस्तदेवतामूर्ति", "सहिष्णु", "सततोत्थित", "विघातकारी", "विश्वग्दृक्", "विश्वग्दृक्", "कल्याणगुरु", "उन्मत्तवेष", "अपराजित", "सपराजित", "सर्वैश्वर्यप्रद", "आक्रान्तचिदचित्प्रभु", "श्री विघ्नेश्वर"],
    name: ["Gajanana", "Ganadhyaksha", "Vighnaraja", "Vinayaka", "Dvaimatura", "Dwimukha", "Pramukha", "Sumukha", "Kriti", "Supradipa", "Sukhanidhi", "Suradhyaksha", "Surarighna", "Mahaganapati", "Manya", "Mahakala", "Mahabala", "Heramba", "Lambajathara", "Haswagriva", "Mahodara", "Madotkata", "Mantrine", "Mangala Swara", "Pramadha", "Prathama", "Prajna", "Vighnakarta", "Vignaharta", "Vishwanetra", "Viratpati", "Shripati", "Vakpati", "Shringarin", "Ashritavatsala", "Shivapriya", "Shighrakarina", "Shashwata", "Bala", "Balotthitaya", "Bhavatmajaya", "Purana Purusha", "Pushne", "Pushkarotshipta Varine", "Agraganyaya", "Agrapujyaya", "Agragamine", "Mantrakrite", "Chamikaraprabhaya", "Sarvaya", "Sarvopasyaya", "Sarvakartre", "Sarvanetre", "Sarvasiddhipradaya", "Siddhaye", "Panchahastaya", "Parvatinadanaya", "Prabhave", "Kumaragurave", "Akshobhyaya", "Kunjarasura Bhanjanaya", "Pramodaya", "Modakapriyaya", "Kantimate", "Dhritimate", "Kapitthapanasapriyaya", "Brahmacharine", "Brahmarupine", "Brahmavidyadi Danabhuve", "Jishnave", "Vishnupriya", "Bhakta Jivitaya", "Jitamanmadhaya", "Aishwaryakaranaya", "Jyayase", "Yaksha Kinnerasevitaya", "Ganga Sutaya", "Ganadhishaya", "Gambhira Ninadaya", "Vatave", "Abhishtavaradaya", "Jyotishe", "Bhktanidhaye", "Bhavagamyaya", "Mangalapradaya", "Avyaktaya", "Aprakrita Parakramaya", "Satyadharmine", "Sakhaye", "Sarasambunidhaye", "Maheshaya", "Divyangaya", "Manikinkini Mekhalaya", "Samasta Devata Murtaye", "Sahishnave", "Satatotthitaya", "Vighatakarine", "Vishwagdrishe", "Vishwarakshakrite", "Kalyanagurave", "Unmattaveshaya", "Aparajite", "Samsta Jagadadharaya", "Sarwaishwaryapradaya", "Akranta Chida Chitprabhave", "Shri Vighneshwaraya"]
  },
  {
    god: "Hanuman",
    dev: "हनूमान्",
    nama: ["आञ्जनेय", "महावीर", "हनूमान्", "मारुतात्मज", "तत्वज्ञानप्रद", "सीतादेवीमुद्राप्रदायक", "अशोकवनिकाच्छेत्ता", "सर्वमायाविभञ्जन", "सर्वबन्धविमोक्ता", "रक्षोविध्वंसकारक", "परविद्यापरिहार", "परशौर्यविनाशन", "परमन्त्रनिराकर्ता", "परयन्त्रप्रभेदक", "सर्वग्रहविनाशी", "भीमसेनसहायकृत्", "सर्वदुःखहर", "सर्वलोकचारी", "मनोजव", "पारिजातद्रुमूलस्थ", "सर्वमन्त्रस्वरूपवान्", "सर्वतन्त्रस्वरूपी", "सर्वयन्त्रात्मक", "कपीश्वर", "महाकाय", "सर्वरोगहर", "बलसिद्धिकर", "सर्वविद्यासम्पत्प्रदायक", "कपिसेनानायक", "भविष्यच्चतुरानन", "कुमारब्रह्मचारी", "रत्नकुण्डलदीप्तिमान्", "सञ्चलद्बालसन्नद्धलम्बमानशिखोज्ज्वल", "गन्धर्वविद्यातत्वज्ञ", "महाबलपराक्रम", "कारागृहविमोक्ता", "शृङ्खलाबन्धमोचक", "सागरोत्तारक", "प्राज्ञ", "रामदूत", "प्रतापवान्", "वानर", "केसरीसुत", "सीताशोकनिवारक", "अञ्जनागर्भसम्भूत", "बालार्कसदृशानन", "विभीषणप्रियकर", "दशग्रीवकुलान्तक", "लक्ष्मणप्राणदाता", "वज्रकाय", "महाद्युति", "चिरञ्जीवी", "रामभक्त", "दैत्यकार्यविघातक", "अक्षहन्ता", "काञ्चनाभ", "पञ्चवक्त्र", "महातपस्", "लङ्किनीभञ्जन", "श्रीमान्", "सिंहिकाप्राणभञ्जन", "गन्धमादनशैलस्थ", "लङ्कापुरविदाहक", "सुग्रीवसचिव", "धीर", "शूर", "दैत्यकुलान्तक", "सुरार्चित", "महातेजस्", "रामचूडामणिप्रद", "कामरूपी", "पिङ्गलाक्ष", "वार्धिमैनाकपूजित", "कवलीकृतमार्तण्डमण्डल", "विजितेन्द्रिय", "रामसुग्रीवसन्धाता", "महारावणमर्दन", "स्फटिकाभ", "वागधीश", "नवव्याकृतिपण्डित", "चतुर्बाहु", "दीनबन्धु", "महात्मा", "भक्तवत्सल", "सञ्जीवननगाहर्ता", "शुचि", "वाग्मी", "दृढव्रत", "कालनेमिप्रमथन", "हरिमर्कटमर्कट", "दान्त", "शान्त", "प्रसन्नात्मा", "शतकण्ठमदापहृत्", "योगी", "रामकथालोल", "सीतान्वेषणपण्डित", "वज्रदंष्ट्र", "वज्रनख", "रुद्रवीर्यसमुद्भव", "पार्थध्वजाग्रसंवासी", "शरपञ्जरभेदक", "दशबाहु", "लोकपूज्य", "जाम्बवत्प्रीतिवर्धन", "सीतासमेतश्रीरामपादसेवाधुरन्धर"],
    name: ["Anjaneya", "Mahavira", "Hanumanta", "Marutatmaja", "Tatvagyanaprada", "Sitadevi Mudrapradayaka", "Ashokavanakachhetre", "Sarvamayavibhanjana", "Sarvabandha Vimoktre", "Rakshovidhwansakaraka", "Paravidyaparihara", "Parashaurya Vinashana", "Paramantra Nirakartre", "Parayantra Prabhedaka", "Sarvagraha Vinashi", "Bheemasenasahayakruthe", "Sarvadukhahara", "Sarvalolkacharine", "Manojavaya", "Parijata Drumoolastha", "Sarvamantra Swaroopavate", "Sarvatantra Swaroopine", "Sarvayantratmaka", "Kapeeshwara", "Mahakaya", "Sarvarogahara", "Balasiddhikara", "Sarvavidya Sampattipradayaka", "Kapisenanayaka", "Bhavishyath Chaturanana", "Kumarabrahmachari", "Ratnakundala Deeptimate", "Chanchaladwala sannaddha-lambamaana shikhojwala", "Gandharvavidya Tatvangna", "Mahabala Parakrama", "Karagrahavimoktre", "Shrunkhalabandhamochaka", "Sagarotharaka", "Pragnya", "Ramaduta", "Pratapavate", "Vanara", "Kesarisuta", "Sitashoka Nivaraka", "Anjanagarbhasambhoota", "Balarka Sadrashanana", "Vibheeshanapriyakara", "Dashagreevakulantaka", "Lakshmanapranadatre", "Vajrakaya", "Mahadyuta", "Chiranjeevini", "Ramabhakta", "Daityakarya Vighataka", "Akshahantre", "Kanchanabha", "Panchavaktra", "Mahatapasi", "Lankineebhanjana", "Shrimate", "Simhikaprana Bhanjana", "Gandhamadana Shailastha", "Lankapuravidahaka", "Sugreeva Sachiva", "Dheera", "Shoora", "Daityakulantaka", "Surarchita", "Mahatejasa", "Ramachudamaniprada", "Kamaroopine", "Pingalaksha", "Vardhimainakapujita", "Kabalikruta Martanda-Mandalaya", "Vijitendriya", "Ramasugreeva Sandhatre", "Maharavanamardana", "Sphatikabha", "Vagadheesha", "Navavyakruta Pandita", "Chaturbahave", "Deenabandhuraya", "Mahatmane", "Bhakthavatsala", "Sanjeevananagahatre", "Shuchaye", "Vagmine", "Dridhavrata", "Kalanemi Pramathana", "Harimarkatamarkata", "Danta", "Shanta", "Prasannatmane", "Shatakanttamadapahate", "Yogi", "Ramakathalolaya", "Sitanveshana Pandita", "Vajradranushta", "Vajranakha", "Rudraveerya Samudbhava", "Parthadhwajagrasamvasine", "Sharapanjarabhedaka", "Dashabahave", "Lokapujya", "Jambavatpreeti Vardhana", "Sitaramapadaseva"]
  },
  {
    god: "Vishnu",
    dev: "विष्णु",
    nama: ["विष्णु", "लक्ष्मीपति", "वैकुण्ठ", "गरुडध्वज", "परब्रह्म", "जगन्नाथ", "वासुदेव", "त्रिविक्रम", "दैत्यान्तक", "मधुरिपु", "तार्क्ष्यवाहन", "सनातन", "नारायण", "पद्मनाभ", "हृषीकेश", "सुधाप्रद", "माधव", "पुण्डरीकाक्ष", "स्थितिकर्ता", "परात्पर", "वनमाली", "यज्ञरूप", "चक्रपाणि", "गदाधर", "उपेन्द्र", "केशव", "हंस", "समुद्रमथन", "हरि", "ब्रह्मजनक", "कैटभासुरमर्दन", "श्रीधर", "कामजनक", "शेषशायी", "चतुर्भुज", "पाञ्चजन्यधर", "श्रीमान्", "शार्ङ्गपाणि", "जनार्दन", "पीताम्बरधर", "देव", "सूर्यचन्द्रविलोचन", "मत्स्यरूप", "कूर्मतनु", "क्रोडरूप", "नृकेसरि", "वामन", "भार्गव", "बली", "कल्कि", "हयानन", "विश्वम्भर", "शिशुमार", "श्रीकर", "कपिल", "ध्रुव", "दत्तत्रेय", "अच्युत", "अनन्त", "मुकुन्द", "दधिवामन", "धन्वन्तरि", "श्रीनिवास", "प्रद्युम्न", "पुरुषोत्तम", "श्रीवत्सकौस्तुभधर", "मुराराति", "अधोक्षज", "ऋषभ", "मोहिनीरूपधारी", "सङ्कर्षण", "पृथु", "क्षीराब्धिशायी", "भूतात्मा", "अनिरुद्ध", "नर", "गजेन्द्रवरद", "त्रिधाम", "भूतभावन", "श्वेतद्वीपसुवास्तव्य", "सनकादिमुनिध्येय", "भगवान्", "शङ्करप्रिय", "नीलकान्त", "धराकान्त", "वेदात्मा", "बादरायण", "भागीरथीजन्मभूमिपादपद्म", "सतां प्रभु", "स्वभु", "विभु", "घनश्याम", "जगत्कारण", "अव्यय", "बुद्धावतार", "शान्तात्मा", "लीलामानुषविग्रह", "दामोदर", "विराड्रूप", "भूतभव्यभवत्प्रभु", "आदिदेव", "देवदेव", "प्रह्लादपरिपालक", "श्रीमहाविष्णु"],
    name: ["Vishnu", "Lakshmipati", "Vaikuntha", "Garudadhwaja", "Parabrahma", "Jagannatha", "Vasudeva", "Trivikrama", "Daityantaka", "Madhuri", "Tarkshyavahanaya", "Sanatana", "Narayana", "Padmanabha", "Hrishikesha", "Sudhapradaya", "Madhava", "Pundarikaksha", "Sthitikarta", "Paratpara", "Vanamali", "Yajnarupa", "Chakrapanaye", "Gadadhara", "Upendra", "Keshava", "Hamsa", "Samudramathana", "Haraye", "Brahmajanaka", "Kaitabhasuramardana", "Shridhara", "Kamajanaka", "Sheshashayini", "Chaturbhuja", "Panchajanyadhara", "Shrimata", "Sharngapana", "Janardana", "Pitambaradhara", "Deva", "Suryachandravilochana", "Matsyarupa", "Kurmatanave", "Krodarupa", "Nrikesari", "Vamana", "Bhargava", "Bali", "Kalki", "Hayanana", "Vishwambhara", "Shishumara", "Shrikara", "Kapila", "Dhruva", "Dattatreya", "Achyuta", "Ananta", "Mukunda", "Dadhivamana", "Dhanvantari", "Shrinivasa", "Pradyumna", "Purushottama", "Shrivatsakaustubhadhara", "Murarata", "Adhokshaja", "Rishabha", "Mohinirupadhari", "Sankarshana", "Prithvi", "Kshirabdhishayini", "Bhutatma", "Aniruddha", "Nara", "Gajendravarada", "Tridhamne", "Bhutabhavana", "Shwetadwipasuvastavyaya", "Sankadimunidhyeyaya", "Bhagavata", "Shankarapriya", "Nilakanta", "Dharakanta", "Vedatmana", "Badarayana", "Bhagirathijanmabhumi Padapadma", "Satam Prabhave", "Swabhuve", "Vibhava", "Ghanashyama", "Jagatkaranaya", "Avyaya", "Buddhavatara", "Shantatma", "Lilamanushavigraha", "Damodara", "Viradrupa", "Bhutabhavyabhavatprabha", "Adideva", "Devadeva", "Prahladaparipalaka", "Shrimahavishnu"]
  },
  {
    god: "Shiva",
    dev: "शिव",
    nama: ["शिव", "महेश्वर", "शम्भु", "पिनाकी", "शशिशेखर", "वामदेव", "विरूपाक्ष", "कपर्दी", "नीललोहित", "शङ्कर", "शूलपाणी", "खट्वाङ्गी", "विष्णुवल्लभ", "शिपिविष्ट", "अम्बिकानाथ", "श्रीकण्ठ", "भक्तवत्सल", "भव", "शर्व", "त्रिलोकेश", "शितिकण्ठ", "उग्र", "कपाली", "कामारि", "अन्धकासुरसूदन", "गङ्गाधर", "ललाटाक्ष", "कालकाल", "कृपानिधि", "भीम", "परशुहस्त", "मृगपाणि", "जटाधर", "कैलासवासी", "कवची", "कठोर", "त्रिपुरान्तक", "वृषाङ्क", "वृषभारूढ", "भस्मोद्धूलितविग्रह", "सामप्रिय", "स्वरमय", "त्रयीमूर्ति", "अनीश्वर", "सर्वज्ञ", "सोमसूर्याग्निलोचन", "हविस्", "यज्ञमय", "सोम", "सदाशिव", "विश्वेश्वर", "वीरभद्र", "गणनाथ", "प्रजापति", "हिरण्यरेता", "दुर्धर्ष", "गिरीश", "अनघ", "भुजङ्गभूषण", "भर्ग", "गिरिधन्वा", "गिरिप्रिय", "कृत्तिवासा", "पुराराति", "भगवान्", "प्रमथाधिप", "मृत्युञ्जय", "सूक्ष्मतनु", "जगद्व्यापी", "व्योमकेश", "महासेनजनक", "चारुविक्रम", "रुद्र", "भूतपति", "स्थाणु", "अहिर्बुध्न्य", "दिगम्बर", "अष्टमूर्ति", "अनेकात्मा", "सात्त्विक", "शुद्धविग्रह", "शाश्वत", "खण्डपरशु", "अज", "पाशविमोचक", "मृड", "पशुपति", "महादेव", "अव्यय", "पूषदन्तभिद्", "अव्यग्र", "दक्षाध्वरहर", "हर", "भगनेत्रभित्", "अव्यक्त", "सहस्राक्ष", "सहस्रपात्", "अपवर्गप्रद", "तारक", "परमेश्वर"],
    name: ["Shiva", "Maheshwara", "Shambhu", "Pinakin", "Shashi Shekhara", "Vamadeva", "Virupaksha", "Kapardi", "Nilalohita", "Shankara", "Shulapani", "Khatvangi", "Vishnuvallabha", "Shipivishta", "Ambikanatha", "Shrikantha", "Bhaktavatsala", "Bhava", "Sharva", "Trilokesha", "Shitikantha", "Ugra", "Kapali", "Kamari", "Andhakasura Sudana", "Gangadhara", "Lalataksha", "Kalakala", "Kripanidhi", "Bheema", "Parshuhasta", "Mrigpaani", "Jattadhar", "Kailasavasi", "Kawachi", "Kathor", "Tripurantak", "Vrishanka", "Vrishbharudh", "Bhasmodhulitavigrah", "Samapriya", "Swaramayi", "Trayimurti", "Anishvara", "Sarvagya", "Somasuryaagnilochana", "Havi", "Yagyamaya", "Soma", "Sadashiva", "Vishveshwara", "Veerabhadra", "Gananatha", "Prajapati", "Hiranyareta", "Durdharsha", "Girisha", "Anagha", "Bujangabhushana", "Bharga", "Giridhanva", "Giripriya", "krittivasaa", "Purarati", "Bhagwaan", "Pramathadhipa", "Mrityunjaya", "Sukshamatanu", "Jagadvyapi", "Vyomakesha", "Mahasenajanaka", "Charuvikrama", "Rudra", "Bhootapati", "Sthanu", "Ahirbhudhanya", "Digambara", "Ashtamurti", "Anekatma", "Sattvika", "Shuddhavigraha", "Shashvata", "Khandaparshu", "Aja", "Pashvimochana", "Mrida", "Pashupati", "Mahadeva", "Avayaya", "Bhagnetrabhid", "Avayayat", "Dakshadhwarahara", "Har", "Pushadantabhit", "Avyagra", "Sahsraksha", "Sahasrapada", "Apavargaprada", "Taraka", "Parameshwara"]
  },
  {
    god: "Rama",
    dev: "राम",
    nama: ["श्रीराम", "रामभद्र", "रामचन्द्र", "राजीवलोचन", "राजेन्द्र", "रघुपुङ्गव", "जानकीवल्लभ", "जैत्र", "जितामित्र", "विश्वामित्रप्रिय", "शरणत्राणतत्पर", "वालिप्रमथन", "सत्यवाक्", "सत्यविक्रम", "सत्यव्रत", "व्रतधर", "सदा हनुमदाश्रित", "कौसलेय", "खरध्वंसी", "विराधवधपण्डित", "विभीषणपरित्राता", "हरकोदण्डखण्डन", "सप्ततालप्रभेत्ता", "दशग्रीवशिरोहर", "जामदग्न्यमहादर्पदलन", "ताटकान्तक", "वेदान्तसार", "वेदात्मा", "भवरोगस्य भेषजम्", "दूषणत्रिशिरोहन्ता", "त्रिमूर्ति", "त्रिगुणात्मक", "त्रिलोकात्मा", "पुण्यचारित्रकीर्तन", "त्रिलोकरक्षक", "धन्वी", "दण्डकारण्यकर्तन", "अहल्याशापशमन", "पितृभक्त", "वरप्रद", "जितेन्द्रिय", "जितक्रोध", "ऋक्षवानरसङ्घाती", "चित्रकूटसमाश्रय", "जयन्तत्राणवरद", "सुमित्रापुत्रसेवित", "सर्वदेवादिदेव", "मृतवानरजीवन", "मायामारीचहन्ता", "महाभुज", "सर्वदेवस्तुत", "सौम्य", "ब्रह्मण्य", "मुनिसंस्तुत", "महायोगी", "सुग्रीवेप्सितराज्यद", "सर्वपुण्याधिकफल", "स्मृतसर्वाघनाशन", "आदिपुरुष", "परमपुरुषाय", "महापुरुषाय", "पुण्योदय", "दयासार", "पुराणपुरुषोत्तम", "स्मितवक्त्र", "मितभाषी", "पूर्वभाषी", "राघव", "अनन्तगुणगम्भीर", "धीरोदात्तगुणोत्तम", "मायामानुषचारित्र", "महादेवादिपूजित", "सेतुकृत्", "जितवारीश", "सर्वतीर्थमय", "श्यामाङ्ग", "सुन्दर", "पीतवासा", "धनुर्धर", "सर्वयज्ञाधिप", "यज्वी", "जरामरणवर्जित", "शिवलिङ्गप्रतिष्ठाता", "सर्वापगुणवर्जित", "परमात्मा", "सच्चिदानन्दविग्रह", "परं ज्योतिस्", "परं धाम", "पराकाश", "परेश", "पारग", "पार", "सर्वदेवात्मक", "परम्"],
    name: ["Shree Rama", "Ramabhadra", "Ramachandra", "Rajeevalochana", "Rajendra", "Raghupungava", "Janakivallabha", "Jaitra", "Jitamitra", "Vishwamitrapriya", "Sharanatrana Tatpara", "Valipramathana", "Satyavache", "Satyavikrama", "Satyavrata", "Vratadhara", "Sada Hanumadashrita", "Kausaleya", "Kharadhwamsi", "Viradhavadhapandita", "Vibheeshanaparitrata", "Harakodandakhandana", "Saptatalaprabhetta", "Dashagreeva Shirohara", "Jamadagnya Mahadarpadalana", "Tatakantaka", "Vedantasara", "Vedatma", "Bhavarogasya Bheshajam", "Dooshanatrishirohanta", "Trimurti", "Trigunatmaka", "Trilokatma", "Punyacharitra Keertana", "Trilokarakshaka", "Dhanvi", "Dandakaranya Kartana", "Ahalyashapashamana", "Pitrabhakta", "Varaprada", "Jitendriya", "Jitakrodha", "Rikshavanara Sanghati", "Chitrakoot Samashraya", "Jayantatranavarada", "Sumitraputra Sevita", "Sarvadevadideva", "Mrutavanarajeevana", "Mayamareechahanta", "Mahabhuja", "Sarvadevastuta", "Soumya", "Brahmanya", "Munisanstuta", "Mahayogi", "Sugreevepsita Rajyada", "Sarva Punyadhikaphala", "Smrita Sarvaghanashana", "Adipurusha", "Paramapurusha", "Mahapurusha", "Punyodaya", "Dayasara", "Puranapurushottama", "Smitavaktra", "Mitabhashi", "Purvabhashi", "Raghava", "Anantaguna Gambhira", "Dheerodatta Gunottama", "Mayamanushacharitra", "Mahadevadipujita", "Setukrute", "Jitavarashaya", "Sarvatirthamaya", "Shyamanga", "Sundara", "Peetavasa", "Dhanurdhara", "Sarvayagyadhipa", "Yajvane", "Jaramarana Varjita", "Shivalingapratishthata", "Sarvapagunavarjita", "Paramatma", "Sachidananda Vigraha", "Paramjyoti", "Paramdhama", "Parakasha", "Paresha", "Paraga", "Para", "Sarvadevatmaka", "Parasme"]
  },
  {
    god: "Krishna",
    dev: "कृष्ण",
    nama: ["श्रीकृष्ण", "कमलानाथ", "वासुदेव", "सनातन", "वसुदेवात्मज", "पुण्य", "लीलामानुषविग्रह", "श्रीवत्सकौस्तुभधर", "यशोदावत्सल", "हरि", "चतुर्भुजात्तचक्रासिगदाशङ्खाम्बुजायुध", "देवकीनन्दन", "श्रीश", "नन्दगोपप्रियात्मज", "यमुनावेगसंहारी", "बलभद्रप्रियानुज", "पूतनाजीवितहर", "शकटासुरभञ्जन", "नन्दव्रजजनानन्दी", "सच्चिदानन्दविग्रह", "नवनीतविलिप्ताङ्ग", "नवनीतनट", "अनघ", "नवनीतनवाहार", "मुचुकुन्दप्रसादक", "षोडशस्त्रीसहस्रेश", "त्रिभङ्गी", "मधुराकृति", "शुकवागमृताब्धीन्दु", "गोविन्द", "योगिपति", "धेनुकासुरभञ्जन", "तृणीकृततृणावर्त", "यमलार्जुनभञ्जन", "उत्तालतालभेत्ता", "तमालश्यामलाकृति", "योगी", "कोटिसूर्यसमप्रभ", "इलापति", "परं ज्योतिस्", "यादवेन्द्र", "यदूद्वह", "वनमाली", "पीतवासा", "पारिजातापहारक", "गोवर्धनाचलोद्धर्ता", "गोपाल", "सर्वपालक", "अज", "कामजनक", "कञ्जलोचन", "मधुघ्ना", "मथुरानाथ", "बलि", "वृन्दावनान्तसञ्चारी", "तुलसीदामभूषण", "स्यमन्तकमणेर्हर्ता", "नरनारायणात्मक", "कुब्जाकृष्णाम्बरधर", "मुष्टिकासुरचाणूरमल्लयुद्धविशारद", "संसारवैरी", "कंसारि", "मुरारि", "नरकान्तक", "अनादिब्रह्मचारी", "कृष्णाव्यसनकर्षक", "शिशुपालशिरश्छेत्ता", "दुर्योधनकुलान्तक", "विदुराक्रूरवरद", "सत्यवाक्", "सत्यसङ्कल्प", "सत्यभामारत", "जयी", "भीष्ममुक्तिप्रदायक", "जगद्गुरु", "जगन्नाथ", "वेणुनादविशारद", "वृषभासुरविध्वंसी", "बाणासुरकरान्तक", "युधिष्ठिरप्रतिष्ठाता", "बर्हिबर्हावतंसक", "पार्थसारथि", "अव्यक्त", "दामोदर", "यज्ञभोक्ता", "परब्रह्म", "पन्नगाशनवाहन", "जलक्रीडासमासक्तगोपीवस्त्रापहारक", "पुण्यश्लोक", "तीर्थकर", "वेदवेद्य", "दयानिधि", "सर्वतीर्थात्मक"],
    name: ["Krishna", "Kamalanatha", "Sanatan", "Vasudevatmaja", "Punya", "Lila-manush-vigraha", "Shrivatsa kausthubadharya", "Yashoda vatsala", "Hari", "Chaturbujat Chakrasigada", "Shakhambuja Ayudhaya", "Devakinandana", "Shrisay", "Nandagopa Priyatmaja", "Yamunavega samhar", "Balabhadra Priyanuja", "Putanajivitahara", "Shakatasura bhanjana", "Nandavraja jananandin", "Sachidanand vigraha", "Navanit viliptanga", "Navanita-natana", "Muchukunda Prasadaka", "Shodashastri sahasresha", "Tribhangi", "Madhurakrut", "Shukavagamritabdindave", "Govinda", "Yoginampati", "Vatsavaata charaya", "Dhenukasura-bhanjanaya", "Trni-Krta-Trnavarta", "Yamalarjuna bhanjana", "Uttalottalabhetre", "Tamala-shyamala-kruta", "Gopa Gopishwara", "Koti-surya-samaprabha", "Ilapati", "Parasmai jyotish", "Yadavendra", "Yadudvahaya", "Vanamaline", "Pita vasase", "Parijatapa Harakaya", "Govardhanchalo Dhartreya", "Gopala", "Sarva palakaya", "Ajaya", "Niranjana", "Kanjalochana", "Madhughne", "Mathuranatha", "Dvarakanayaka", "Vrindavananta sancharine", "Tulasidama bhushanaya", "Syamantaka-maner-hartre", "Narnarayanatmakaya", "Kubja Krishnambaradharaya", "Mayine", "samsara-vairi", "Kamsarir", "Murara", "Narakantakah", "Anadi brahmacharika", "Krishnavyasana-karshakah", "Shishupala-shirashchetta", "Duryodhana-kulantakrit", "Vidurakrura-varada", "Vishvarupa-pradarshakah", "Satya sankalpah", "Satyabhamarata", "Jayi", "Subhadra purvajah", "Bhishma mukti Pradayaka", "Jagadguru", "venu-nada-visharada", "Vrishabhasura vidhvamsi", "banasura karantakrit", "Yudhishthira pratishthatre", "Barhi Barhavatamsaka", "Parthasarthi", "Avyakta", "Gitamrita Mahodadhi", "Yajnabhokta", "Danavendra Vinashaka", "Pannagashana vahana", "Jalakrida samasakta gopivastra pararaka", "Punya-Shloka", "Tirthakara", "Vedvedya", "Dayanidhi", "Sarvabhutatmaka", "Sarvagraharupi"]
  },
  {
    god: "Lakshmi",
    dev: "लक्ष्मी",
    nama: ["प्रकृति", "विकृति", "विद्या", "सर्वभूतहितप्रदा", "श्रद्धा", "विभूति", "सुरभि", "परमात्मिका", "वाक्", "पद्मालया", "पद्मा", "शुचि", "स्वाहा", "स्वधा", "सुधा", "धन्या", "हिरण्मयी", "लक्ष्मी", "नित्यपुष्टा", "विभावरी", "अदिति", "दिति", "दीपा", "वसुधा", "वसुधारिणी", "कमला", "कान्ता", "कामाक्षी", "क्षीरोधसम्भवा", "अनुग्रहप्रदा", "बुद्धि", "हरिवल्लभा", "अशोका", "अमृता", "दीप्ता", "लोकशोकविनाशिनी", "धर्मनिलया", "करुणा", "लोकमाता", "पद्मप्रिया", "पद्महस्ता", "पद्माक्षी", "पद्मसुन्दरी", "पद्मोद्भवा", "पद्ममुखी", "पद्मनाभप्रिया", "पद्ममालाधरा", "देवी", "पद्मिनी", "पद्मगन्धिनी", "पुण्यगन्धा", "सुप्रसन्ना", "प्रसादाभिमुखी", "प्रभा", "चन्द्रवदना", "चन्द्रा", "चन्द्रसहोदरी", "चन्द्ररूपा", "इन्दिरा", "इन्दुशीतला", "आह्लादजननी", "पुष्टि", "शिवकरी", "सत्या", "विमला", "विश्वजननी", "तुष्टि", "दारिद्र्यनाशिनी", "प्रीतिपुष्करिणी", "शुक्लमाल्याम्बरा", "श्री", "भास्करी", "बिल्वनिलया", "वरारोहा", "यशस्विनी", "वसुन्धरा", "उदाराङ्गा", "हरिणी", "हेममालिनी", "धनधान्यकरी", "सिद्धि", "स्त्रैणसौम्या", "शुभप्रदा", "नृपवेश्मगतानन्दा", "वरलक्ष्मी", "वसुप्रदा", "शुभा", "हिरण्यप्राकारा", "समुद्रतनया", "जया", "मङ्गलादेवी", "विष्णुवक्षस्स्थलस्थिता", "विष्णुपत्नी", "प्रसन्नाक्षी", "नारायणसमाश्रिता", "दारिद्र्यध्वंसिनी", "देवी", "सर्वोपद्रववारिणी", "नवदुर्गा", "महाकाली", "ब्रह्माविष्णुशिवात्मिका", "त्रिकालज्ञानसम्पन्ना", "भुवनेश्वरी"],
    name: ["Prakriti", "Vikriti", "Vidya", "Sarvabhutahitaprada", "Shraddha", "Vibhuti", "Surabhi", "Paramatmika", "Vachi", "Padmalaya", "Padma", "Shuchi", "Swaha", "Swadha", "Sudha", "Dhanya", "Hiranmayi", "Lakshmi", "NityaPushta", "Vibha", "Aditya", "Ditya", "Dipa", "Vasudha", "Vasudharini", "Kamala", "Kanta", "Kamakshi", "Kshirodhasambhava Krodhasambhava", "Anugrahaprada", "Buddhi", "Harivallabhi", "Ashoka", "Amrita", "Dipta", "Lokashokavinashini", "Dharmanilaya", "Karuna", "Lokamatri", "Padmapriya", "Padmahasta", "Padmakshya", "Padmasundari", "Padmodbhava", "Padmamukhi", "Padmanabhapriya", "Rma", "Padmamaladhara", "Devi", "Padmini", "Padmagandhini", "Punyagandha", "Suprasanna", "Prasadabhimukhi", "Prabha", "Chandravadana", "Chandra", "Chandrasahodari", "Chandrarupa", "Indira", "Indusheetala", "Ahladajanani", "Pushti", "Shivakari", "Satya", "Vimala", "Vishwajanani", "Tushti", "Daridryanashini", "Pritipushkarini", "Shuklamalyambara", "Shri", "Bhaskari", "Bilvanilaya", "Vararoha", "Yashaswini", "Vasundhara", "Udaranga", "Harini", "Hemamalini", "Dhanadhanyaki", "Siddhi", "Strainasoumya", "Shubhaprada", "Nripaveshmagatananda", "Varalakshmi", "Vasuprada", "Shubha", "Hiranyaprakara", "Samudratanaya", "Jaya", "Mangala Devi", "Vishnuvakshassthalasthita", "Vishnupatni", "Prasannakshi", "Narayanasamashrita", "Daridryadhwamsini", "Sarvopadrava Varini", "Navadurga", "Mahakali", "Brahmavishnushivatmika", "Trikalajnanasampanna", "Bhuvaneshwari"]
  },
  {
    god: "Saraswati",
    dev: "सरस्वती",
    nama: ["सरस्वती", "महाभद्रा", "महामाया", "श्रीप्रदा", "पद्मनिलया", "पद्माक्षी", "पद्मवक्त्रका", "शिवानुजा", "पुस्तकभृत्", "ज्ञानमुद्रा", "कामरूपा", "महाविद्या", "महापातकनाशिनी", "महाश्रया", "मालिनी", "महाभोगा", "महाभागा", "महोत्साहा", "दिव्याङ्गा", "सुरवन्दिता", "महापाशा", "महाकारा", "महाङ्कुशा", "पीता", "विश्वा", "विद्युन्माला", "वैष्णवी", "चन्द्रिका", "चन्द्रलेखाविभूषिता", "सावित्री", "सुरसा", "दिव्यालङ्कारभूषिता", "वाग्देवी", "तीव्रा", "भोगदा", "भारती", "भामा", "गोमती", "जटिला", "विन्ध्यवासा", "विन्ध्याचलविराजिता", "चण्डिका", "ब्राह्मी", "ब्रह्मज्ञानैकसाधना", "सौदामिनी", "सुधामूर्ति", "सुभद्रा", "सुरपूजिता", "सुवासिनी", "सुनासा", "विनिद्रा", "पद्मलोचना", "विद्यारूपा", "विशालाक्षी", "ब्रह्मजाया", "महाफला", "त्रिकालज्ञा", "त्रिगुणा", "शास्त्ररूपिणी", "शुम्भासुरप्रमथिनी", "शुभदा", "स्वरात्मिका", "रक्तबीजनिहन्त्री", "चामुण्डा", "अम्बिका", "मुण्डकायप्रहरणा", "धूम्रलोचनमर्दना", "सौम्या", "सुरासुरनमस्कृता", "कालरात्रि", "कलाधारा", "रूपसौभाग्यदायिनी", "वाग्देवी", "वाराही", "वारिजासना", "चित्राम्बरा", "चित्रगन्धा", "चित्रमाल्यविभूषिता", "वन्द्या", "विद्याधरसुपूजिता", "श्वेतानना", "नीलभुजा", "चतुर्वर्गफलप्रदा", "चतुराननसाम्राज्या", "रक्तमध्या", "हंसासना", "नीलजङ्घा"],
    name: ["Saraswati", "Mahabhadra", "Mahamaya", "Shripada", "Padmanilaya", "Padmakshi", "Padmavaktraga", "Shivanuja", "Pustakabhrita", "Jnanamudra", "Kamarupa", "Mahavidya", "Mahapataka Nashini", "Mahashraya", "Malini", "Mahabhoga", "Mahabhaga", "Mahotsaha", "Divyanga", "Suravandita", "Mahapasha", "Mahakara", "Mahankusha", "Pita", "Vishwa", "Vidyunmala", "Vaishnavi", "Chandrika", "Chandralekha Vibhushita", "Savitri", "Surasa", "Divyalankarabhushita", "Vagdevi", "Tivra", "Bhogada", "Bharati", "Bhama", "Gomati", "Jatila", "Vindhyavasa", "Vindhyachalavirajita", "Chandika", "Brahmi", "Brahmajnanaikasadhana", "Saudamini", "Sudhamurti", "Subhadra", "Surapujita", "Suvasini", "Sunasa", "Vinidra", "Padmalochana", "Vidyarupa", "Vishalakshi", "Brahmajaya", "Mahaphala", "Trikalajna", "Triguna", "Shastrarupini", "Shumbhasura-Pramathini", "Shubhada", "Swaratmika", "Raktabijanihantri", "Chamunda", "Ambika", "Mundakayapraharana", "Dhumralochanamardana", "Saumya", "Surasura Namaskrita", "Kalaratri", "Kaladhara", "Rupasaubhagyadayini", "Varahi", "Varijasana", "Chitrambara", "Chitragandha", "Chitramalyavibhushita", "Kamaprada", "Vandya", "Vidyadharasupujita", "Shwetanana", "Nilabhuja", "Chaturvargaphalaprada", "Chaturanana Samrajya", "Raktamadhya", "Hamsasana", "Nilajangha"]
  }
];


let numSelected, num_wrong_guesses = 0, num_found = 0, num_hint_given = 0;

let already_guessed = [], all_guess_IDs = [], results = [];

let list_hint_class = ["hinted", "hint_group1", "hint_group2", "hint_group3", "hint_group4"];

let name_list = [];

let nama_lastPlayedTs, is_english;


function createGame() {

  var today = new Date();
  
  if ( Na(new Date(nama_lastPlayedTs), today) < 1) {
    alert("Play a new puzzle tomorrow!")
    return;
  }
  
  is_english = document.getElementById('eng').checked;

  
  // const inputWords = prompt("Enter 16 words separated by spaces:");
  // let word_list = wordsArray[0].split(" ").map((word) => word.trim());
  name_list = [];
  document.body.className = "";
  status.innerHTML = ``;
  info.innerHTML = ``;
  share.style.display = "none";
  image.style.display = "none";
  
  let num_gods = ashttotara.length;
  
  let rnd_indices = Array.from({length: num_gods}, (x, i) => i);
  shuffle(rnd_indices);
  
  clues.innerHTML = `Gods: `
  
  for(let i=0; i < 3; i++) {
    let god_index = rnd_indices[i];
    
    let god_obj = ashttotara[god_index];
    
    const clue = document.createElement("span");
    clue.classList.add(`group${i+1}`); 
      if (is_english == true) {    
        clue.textContent = ` ${god_obj.god} `;
      }
      else {
        clue.textContent = ` ${god_obj.dev} `;
      }
    clues.appendChild(clue);
    
    // let nm_indices = Array.from({length: god.nama.length}, (x, i) => i);
    // shuffle(nm_indices);
    let ids = [];
    
    for(let j=0; j<3; j++){
      
      let nm_indx = Math.floor(Math.random() * god_obj.nama.length);
      
      if (ids.includes(nm_indx)) {
        if (nm_indx!=0){
          nm_indx = nm_indx-1;
        } else {
          nm_indx = god_obj.nama.length-1 ;
        }
      }
      ids.push(nm_indx);
      if (is_english == true) {    
        name_list.push(god_obj.name[nm_indx]);
      }
      else {
        name_list.push(god_obj.nama[nm_indx]);
      }
    }
  }
  
  createGridItems(name_list);
  shuffleGrid();
  
  submitButton.style.display = "revert";
  shuffleButton.style.display = "revert";
  HintButton.style.display = "revert";
  
  numSelected = 0;
  num_wrong_guesses = 0;
  num_hint_given = 0;
  already_guessed = [];
  all_guess_IDs = [];
//  selectedGroupIDs = [];   
  num_found = 0;
  results = [];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to create grid items
function createGridItems(words) {
    gridContainer.innerHTML = "";
    words.forEach((word, index) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item"); 
        
        gridItem.textContent = word; //.toUpperCase();
        // gridItem.draggable = true;
        gridItem.setAttribute("data-id", `item-${index}`);
        gridItem.setAttribute("data-selected", "false"); // Set data-selected attribute to "false" initially
        gridItem.setAttribute("data-locked", "false"); // Set data-locked attribute to "false" initially

        gridItem.addEventListener("click", function() {
            toggleSelect(gridItem);
        });
 
        gridContainer.appendChild(gridItem);
    });

}

// Function to toggle item lock
function toggleSelect(item) {
  
  const isSelected = item.getAttribute("data-selected") === "true";
  
  if ( (isSelected == false) && (numSelected>=3) ) {
      return;
    }
  const newSelectState = isSelected ? "false" : "true";
  
//  console.info(`Current state ${isSelected}`);
  
  item.setAttribute("data-selected", newSelectState);
  item.classList.toggle("selected");
//  item.draggable = newLockState === "false";
  if (newSelectState === "true") {
    numSelected += 1;  
  } else {
    numSelected -= 1;
  }
}

// Function to shuffle unlocked items
function shuffleGrid() {
    const unlockedItems = Array.from(gridContainer.querySelectorAll(".grid-item[data-locked='false']"));
    const shuffledItems = unlockedItems.sort(() => Math.random() - 0.5);

    // Create a map of locked item positions
    const lockedItemPositions = new Map();
    const gridItems = gridContainer.querySelectorAll(".grid-item");
    gridItems.forEach((item, index) => {
        if (item.getAttribute("data-locked") === "true") {
            lockedItemPositions.set(item, index);
        }
    });

    // Rearrange the unlocked items randomly
    gridContainer.innerHTML = "";
    shuffledItems.forEach((item) => {
        gridContainer.appendChild(item);
    });

    // Restore locked items to their original positions
    lockedItemPositions.forEach((index, item) => {
        gridContainer.insertBefore(item, gridContainer.children[index]);
    });
};



function checkGroup() {
  
  if ( (num_found == 3) || (num_wrong_guesses >= 4) ) {
    
    status.innerHTML = `Game Over. Start a new one?`;
    console.log('Game Over');
    
    return;
  }
  if (numSelected !=3){
    
    status.innerHTML = `Select 3 items`;
    return;
  }
  
  let selectedGroupIDs = [];

  const selectedItems = gridContainer.querySelectorAll(".grid-item[data-selected='true']");
  
  selectedItems.forEach((item, index) => {
    const selectedItemId = item.getAttribute("data-id");
    selectedGroupIDs.push(selectedItemId.match(/\d+/)[0]);
  });
  
//  console.info(selectedGroupIDs);
  
  let guess = selectedGroupIDs.toSorted().join('');
//  guess = guess.sort().join('');
//  console.log(guess);
//  selectedGroupIDs = [];
  
  if (already_guessed.includes(guess)) {
    
    status.innerHTML = `Already guessed`;
    console.log('Already guessed');
    
    numSelected = 0;
    
    selectedItems.forEach((item, index) => {
      item.classList.remove("selected");
      item.setAttribute("data-selected", false);
    });
    
    return;
  }
  
  already_guessed.push(guess);
  
  all_guess_IDs.push(selectedGroupIDs);
  
  let grp1 =0, grp2=0, grp3=0;
  
  selectedGroupIDs.forEach( (IDX, ind) => {
    // console.log(IDX);
    let ID = Number(IDX);
    if ( ([0,1,2]).includes(ID) ) {
      grp1 += 1;
    } else if ( ([3,4,5]).includes(ID) ) {
      grp2 += 1;
    } else if ( ([6,7,8]).includes(ID) ) {
      grp3 += 1;
    }
  });
  
  let success = false, group;
  
  if ( (grp1==3) || (grp2==3) || (grp3==3) ) {
    
    success = true;
    num_found += 1;
    console.log('Found a group');
    status.innerHTML = `Found a group`;
    
  } else if ( (grp1==2) || (grp2==2) || (grp3==2)  ) {
    
    success = false;
    num_wrong_guesses += 1;
    console.log(`One Away. Wrong guess no. ${num_wrong_guesses}`);
    status.innerHTML = `Just miss! Wrong guess no. ${num_wrong_guesses}`;
    
  } else {
    
    num_wrong_guesses += 1;
    console.log(`Wrong guess no. ${num_wrong_guesses}`);
    
    if (num_wrong_guesses == 3)
      status.innerHTML = `Wrong guess no. ${num_wrong_guesses}. Last chance!`;
    else 
      status.innerHTML = `Wrong guess no. ${num_wrong_guesses}`;

  }

  if (grp1 == 3) {
    group = "group1";
  } else if (grp2 == 3) {
    group = "group2";
  } else if (grp3 == 3) {
    group = "group3";
  }
  
/*  
  if (guess == '0123') {
    success = true;
    group = "group1";
    num_found += 1;
    console.log('Found group 1');
    status.innerHTML = `Found a group`;
    
  } else if (guess == '4567') {
    success = true;
    group = "group2";
    num_found += 1;
    console.log('Found group 2');
    status.innerHTML = `Found a group`;
    
  } else if (guess == '101189') {
    success = true;
    group = "group3";
    num_found += 1;
    console.log('Found group 3');
    status.innerHTML = `Found a group`;
    
  } else if (guess == '12131415') {
    success = true;
    group = "group4";
    num_found += 1;
    console.log('Found group 4');
    status.innerHTML = `Found a group`;
    
  } else {
    
    num_wrong_guesses += 1;
    
    console.log(`Wrong guess no. ${num_wrong_guesses}`);
    
    if (num_wrong_guesses < 4)
      status.innerHTML = `Wrong guess no. ${num_wrong_guesses}`;
    else
      status.innerHTML = `Wrong guess no. ${num_wrong_guesses}. Game Over.`;
    
  } */
  
  if (num_wrong_guesses == 4) {
    status.innerHTML = `Wrong guess no. ${num_wrong_guesses}. Game Over.`;
    
  } 
  
  if (num_found == 3) {
    status.innerHTML = `You won the Game.`;
    
    document.body.className = "winner";
  }
    
  // const selectedItems = gridContainer.querySelectorAll(".selected");
  const targetItems = gridContainer.querySelectorAll(".grid-item[data-locked='false']");

  selectedItems.forEach((item, index) => {

    item.classList.remove("selected");
    item.setAttribute("data-selected", false);
    
    if (success) {
      // const sourceItemId = item.dataTransfer.getData("text/plain");
      // const sourceItem = gridContainer.querySelector(`[data-id="${sourceItemId}"]`);
      // const targetItemId = e.target.getAttribute("data-id");
      // const targetItem = gridContainer.querySelector(`[data-id="${targetItemId}"]`);
      const targetItem = targetItems[index];
            
      if (item && targetItem && !targetItem.classList.contains("locked")) {

        const tempText = item.textContent;
        item.textContent = targetItem.textContent;
        targetItem.textContent = tempText;

        const new_targetID = item.getAttribute("data-id");
        const new_sourceID = targetItem.getAttribute("data-id");
        item.setAttribute("data-id",new_sourceID);
        targetItem.setAttribute("data-id",new_targetID);
        
        
        list_hint_class.forEach((tag, index) => {
          
          let tar_hinted = targetItem.classList.contains(tag);
          let src_hinted = item.classList.contains(tag);

          if ( (tar_hinted) && !(src_hinted) ){
            item.classList.add(tag);
            targetItem.classList.remove(tag);
          }
          if ( (src_hinted) && !(tar_hinted) ){
            item.classList.remove(tag);
            targetItem.classList.add(tag);
          }
          
        });
        
     }
      
      targetItem.classList.add(group);
      targetItem.classList.add("locked");
      targetItem.setAttribute("data-locked", true);
      
    }
  });

  numSelected = 0;
  
  
  if ( (num_found == 3) || (num_wrong_guesses == 4) ) {
    GameOver();
  }
  
}

function GetaHint() {
  
    if ( (num_found == 3) || (num_wrong_guesses == 4) ) {
      status.innerHTML = `Game Over!`;
      return;
    }
  
  const solvedHints = gridContainer.querySelectorAll(".hinted.locked");
  let num_solved_hints = solvedHints.length;
  
  if ((num_hint_given + num_found - num_solved_hints) >= 3) {
    status.innerHTML = `All hints used up.`
    return;
  }
  
  const unsolvedItems = gridContainer.querySelectorAll(".grid-item[data-locked='false']");
  
  let group, unsolvedIDs = [];
  
  unsolvedItems.forEach((item, index) => {
    
    const Id = item.getAttribute("data-id");
    let id = parseInt(Id.match(/\d+/)[0]);
    unsolvedIDs.push(id);
    
  });
  
  unsolvedIDs.sort((a,b) => a-b);
  
  let num_unsolved_hints = num_hint_given - num_solved_hints;
  
  let hint_indx = unsolvedIDs[num_unsolved_hints * 3 + num_unsolved_hints];
  
  let hintedItem = gridContainer.querySelector(`[data-id="item-${hint_indx}"]`);
  
  if ( ([0,1,2]).includes(hint_indx) ) {
    group = "hint_group1";
  } else if ( ([3,4,5]).includes(hint_indx) ) {
    group = "hint_group2";
  } else if ( ([6,7,8]).includes(hint_indx) ) {
    group = "hint_group3";
  }
  
  hintedItem.classList.add(group);
  hintedItem.classList.add("hinted");
  
  num_hint_given += 1;
  
  status.innerHTML = `Hint ${num_hint_given} used.`
}

function GameOver() {
  
  const targetItems = gridContainer.querySelectorAll(".grid-item[data-locked='false']");
  
  let group, sourceIDs = [];
  
  targetItems.forEach((item, index) => {
    
    const Id = item.getAttribute("data-id");
    let id = parseInt(Id.match(/\d+/)[0]);
    sourceIDs.push(id);
    
  });
  
  sourceIDs.sort((a,b) => a-b);
  // console.log("Items left out: " sourceIDs);
  
  targetItems.forEach((targetItem, index) => {
    
      const sourceItemId = sourceIDs[index];
      const sourceItem = gridContainer.querySelector(`[data-id="item-${sourceItemId}"]`);
      // const targetItemId = targetItem.getAttribute("data-id");
      // const targetItem = gridContainer.querySelector(`[data-id="${targetItemId}"]`);
            
      if ( sourceItem && targetItem && (sourceItem !== targetItem) ) {
        
          const tempText = sourceItem.textContent;
          sourceItem.textContent = targetItem.textContent;
          targetItem.textContent = tempText;
        
          const new_targetID = sourceItem.getAttribute("data-id");
          const new_sourceID = targetItem.getAttribute("data-id");
          sourceItem.setAttribute("data-id",new_sourceID);
          targetItem.setAttribute("data-id",new_targetID);
      } 
    
      list_hint_class.forEach((tag, index) => {

        let tar_hinted = targetItem.classList.contains(tag);
        let src_hinted = sourceItem.classList.contains(tag);

        if ( (tar_hinted) && !(src_hinted) ){
          sourceItem.classList.add(tag);
          targetItem.classList.remove(tag);
        }
        if ( (src_hinted) && !(tar_hinted) ){
          sourceItem.classList.remove(tag);
          targetItem.classList.add(tag);
        }

      });
    
      if ( ([0,1,2]).includes(sourceItemId) ) {
        group = "group1";
      } else if ( ([3,4,5]).includes(sourceItemId) ) {
        group = "group2";
      } else if ( ([6,7,8]).includes(sourceItemId) ) {
        group = "group3";
      }
      
    //  targetItem.classList.remove("group1 group2 group3 group4");
      targetItem.classList.add(group);
      targetItem.classList.add("locked");
      targetItem.setAttribute("data-locked", true);
  });
  /*
  let hinted = gridContainer.querySelectorAll(".hinted");
  hinted.forEach((item, index) => {
    item.classList.remove("hint_group1");
    item.classList.remove("hint_group2");
    item.classList.remove("hint_group3");
    item.classList.remove("hint_group4");
  });*/

  nama_lastPlayedTs = new Date();

  save_history();
  
  share.style.display = "revert";
  share.focus();
  ShareIt();
}

let copyText

function ShareIt() {
  
  // Share your results
  let sq = [];
  results = ""
  all_guess_IDs.forEach((guess_ID, index) => {
    // console.log(guess_ID);
    guess_ID.forEach( (IDX, ind) => {
      // console.log(IDX);
      let ID = Number(IDX);
      if ( ([0,1,2]).includes(ID) ) {
        sq = "🟥"; // "\u1F7E5"
      } else if ( ([3,4,5]).includes(ID) ) {
        sq = "🟩"; // "\u1F7E9"
      } else if ( ([6,7,8]).includes(ID) ) {
        sq = "🟦"; // "\u1F7E6"
      }
      
      results += sq;
    });
    results += "\n";
  });
  
  let linkURL = window.location.href;
  
  copyText = `#Namavali game\n${results} at ${linkURL}`;
  
  navigator.clipboard.writeText(copyText);
  
   if (navigator.canShare) {
    navigator.share({
      title: 'Share results',
      text: `#Namavali game\n${results} at ${linkURL}`,
      // url: linkURL,
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  }
  
//  alert("Copied the results to clipboard");
  tooltip.innerHTML = "Results copied";
}
function outFunc() {
  tooltip.innerHTML = "Copy to clipboard";
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "@") {
      console.log("cheat code for testing game");
      num_found = 3;
      GameOver();
      return;
    }
});

function Na(e, a) {
    var s = new Date(e);
    var t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.round(t / 864e5);
}

function get_history() {
  const noItemsFound_lastPlayedTs = 0;
  const lpts = localStorage.getItem('lpts') || noItemsFound_lastPlayedTs;
  
  nama_lastPlayedTs = JSON.parse(lpts);
}

function save_history() {
  const lpts = JSON.stringify(nama_lastPlayedTs);
  localStorage.setItem('lpts', lpts);
}

get_history();

share.style.display = "none";
submitButton.style.display = "none";
shuffleButton.style.display = "none";
HintButton.style.display = "none";

// Function to handle input
newGameButton.addEventListener("click", createGame);
shuffleButton.addEventListener("click", shuffleGrid);
submitButton.addEventListener("click", checkGroup);
HintButton.addEventListener("click", GetaHint);
