import React from 'react'
import './browse/browse.scss'
import './browse/browse-mobile.scss'
import TopNavBar from '../UIComponents/TopNavBar/TopNavBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSave, faLock, faLockOpen} from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../UIComponents/SearchBar/SearchBar";
library.add(faSave, faLock, faLockOpen);

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    _id: 1,
                    title: "Gaza: An Inquest into Its Martyrdom",
                    author: {
                        firstName: "Norman",
                        lastName: "Finkelstein"
                    },
                    description: "Based on scores of human rights reports, Norman G. Finkelstein's new book" +
                        " presents a meticulously researched inquest into Gaza’s martyrdom. He shows that" +
                        " although Israel has justified its assaults in the name of self-defense, in fact these" +
                        " actions constituted flagrant violations of international law.",
                    cover: "https://images-na.ssl-images-amazon.com/images/I/81jfXhXt%2BWL.jpg"
                },
                {
                    _id: 2,
                    title: "Understanding Power: The Indispensable Chomsky",
                    author: {
                        firstName: "Noam",
                        lastName: "Chomsky"
                    },
                    description: "A major new collection from \"arguably the most important intellectual alive\" " +
                        "(The New York Times). Noam Chomsky is universally accepted as one of the preeminent public " +
                        "intellectuals of the modern era. Over the past thirty years, broadly diverse audiences have " +
                        "gathered to attend his sold-out lectures. Now, in Understanding Power, Peter Mitchell and " +
                        "John Schoeffel have assembled the best of Chomsky's recent talks on the past, present, " +
                        "and future of the politics of power. In a series of enlightening and wide-ranging discussions, " +
                        "all published here for the first time, Chomsky radically reinterprets the events of the past " +
                        "three decades, covering topics from foreign policy during Vietnam to the decline of welfare " +
                        "under the Clinton administration. And as he elucidates the connection between America's " +
                        "imperialistic foreign policy and the decline of domestic social services, " +
                        "Chomsky also discerns the necessary steps to take toward social change. With an eye to " +
                        "political activism and the media's role in popular struggle, as well as U.S. foreign and " +
                        "domestic policy, Understanding Power offers a sweeping critique of the world around us and " +
                        "is definitive Chomsky. Characterized by Chomsky's accessible and informative style, this is " +
                        "the ideal book for those new to his work as well as for those who have been listening for years.",
                    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446807324l/891294._SY475_.jpg"
                },
                {
                    _id: 3,
                    title: "The Dispossessed(Hainish Cycle #6)",
                    author: {
                        firstName: "Ursula",
                        lastName: "K. Le Guin"
                    },
                    description: "Shevek, a brilliant physicist, decides to take action. He will seek answers, " +
                        "question the unquestionable, and attempt to tear down the walls of hatred that have isolated " +
                        "his planet of anarchists from the rest of the civilized universe. To do this dangerous task " +
                        "will mean giving up his family and possibly his life—Shevek must make the unprecedented " +
                        "journey to the utopian mother planet, Urras, to challenge the complex structures of life and " +
                        "living, and ignite the fires of change.",
                    cover: "https://i.pinimg.com/originals/8e/78/7e/8e787ed3f5cad613b7472c9a71780aaf.jpg"
                },
                {
                    _id: 4,
                    title: "Saga, Vol. 2",
                    author: {
                        firstName: "Brian",
                        lastName: "K. Vaughan"
                    },
                    description: "The smash-hit ongoing epic continues! Thanks to her star-crossed parents Marko and " +
                        "Alana, newborn baby Hazel has already survived lethal assassins, rampaging armies, and alien " +
                        "monstrosities, but in the cold vastness of outer space, the little girl encounters something " +
                        "truly frightening: her grandparents!",
                    cover: "https://images-na.ssl-images-amazon.com/images/I/71a2KfLjetL.jpg"
                },
                {
                    _id: 5,
                    title: "Footnotes in Gaza",
                    author: {
                        firstName: "Joe",
                        lastName: "Sacco"
                    },
                    description: "Rafah, a town at the bottommost tip of the Gaza Strip, is a squalid place. " +
                        "Raw concrete buildings front trash-strewn alleys. The narrow streets are crowded with " +
                        "young children and unemployed men. On the border with Egypt, swaths of Rafah have been " +
                        "bulldozed to rubble. Rafah is today and has always been a notorious flashpoint " +
                        "in this bitterest of conflicts.",
                    cover: "https://images-na.ssl-images-amazon.com/images/I/51wjUuSaNzL._AC_SY400_.jpg"
                },
                {
                    _id: 6,
                    title: "Coraline",
                    author: {
                        firstName: "Neil",
                        lastName: "Gaiman"
                    },
                    description: "The day after they moved in, Coraline went exploring....\n" +
                        "\n" +
                        "In Coraline's family's new flat are twenty-one windows and fourteen doors. Thirteen of the doors open and close.\n" +
                        "\n" +
                        "The fourteenth is locked, and on the other side is only a brick wall, until the day Coraline unlocks the door to find a passage to another flat in another house just like her own.\n" +
                        "\n" +
                        "Only it's different.",
                    cover: "https://i.pinimg.com/originals/27/69/b6/2769b68339964d2d703866915b853e86.jpg"
                },
            ],
            languages: [],
            areas: [],
            categories: [],
        };
    }
    componentDidMount() {
    }

    render() {
        const books = this.state.books;
        const languages = this.state.languages;
        const areas = this.state.areas;
        const categories = this.state.areas;
        return (
            <div className={"page-wrap-browse"} dir={"rtl"}>
                <TopNavBar>
                    <div className="title-wrap">
                        ספרייה
                    </div>
                </TopNavBar>
                <div className={"filter-results-wrap"}>
                    <SearchBar placeholder={"חיפוש"} onSearch={()=>{}}/>
                    <select>
                        <option value="" disabled selected>שפה</option>
                        {
                            languages.map((l) => <option value={l._id} key={l._id}>
                                {l.name}
                            </option>)
                        }
                    </select>
                    <select>
                        <option value="" disabled selected>אזור</option>
                        {
                            areas.map((a) => <option value={a._id} key={a._id}>
                                {a.name}
                            </option>)
                        }
                    </select>
                    <select>
                        <option value="" disabled selected>קטגוריה</option>
                        {
                            categories.map((c) => <option value={c._id} key={c._id}>
                                {c.name}
                            </option>)
                        }
                    </select>
                </div>
                <div className={"library-wrap"}>
                    {books.map(b =>
                        <div key={b._id} className={"book-wrap"}>
                            <div className={"book-cover"} style={{backgroundImage: "url("+b.cover+")"}}/>
                            <div className={"book-details"}>
                                <div className={"book-title"}>{b.title}</div>
                                <div className={"book-author"}>{b.author.firstName + " " + b.author.lastName}</div>
                                <div className={"book-description"}>{b.description}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}