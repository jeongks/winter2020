const hikeLists = [
    {
        name: 'Jiri Mountain',
        imgsrc: 'jirisan.jpg',
        imgalt: 'Image of Jiri mountain',
        altitude: '1915m',
        difficulty: 'hard',
        estimate: '10hours',
        description: 'Beautiful path with great autumn color in Fall',
        startpoint: 'Jungsanri'
    },
    {
        name: 'Seolag Mountain',
        imgsrc: 'seolagsan.jpg',
        imgalt: 'Image of Seolag Mountain',
        altitude: '1708m',
        difficulty: 'hard',
        estimate: '10hours',
        description: 'Powerful rocks and beautiful scenary',
        startpoint: 'Han-kae-ryung'
    },
    {
        name: 'Bughan Mountain',
        imgsrc: 'bughansan.jpg',
        imgalt: 'Image of Bughan mountain',
        altitude: '837m',
        difficulty: 'easy',
        estimate: '2hours',
        description: 'Beatuful rocks and Seoul city view at the submit of the mountain',
        startpoint: 'Woo-E-dong'
    }
];

class HikeModel {
    getAllHikes() {
        return hikeLists;
    }
    getHikeByName(name) {
        return hikeLists.find(hike => hike.name === name);
    }
}

export default HikeModel;