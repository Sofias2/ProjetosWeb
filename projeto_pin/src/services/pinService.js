
const generateId = () => {
    return `${(Math.floor(Math.random() * 100000)).toString(16)}-${
        (Math.floor(Math.random() * 100000)).toString(16)}`
}

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
}

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async (folderName) => {
    /**
     * Pegar Lista/array de pastas -> getFolders()
     * Adicionar a pasta dentro do array
     * Salvar novamente no localStore
     */

    const folders = await getFolders();

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    };

    folders.push(newFolder);

    await saveFolders(folders);

    return newFolder;
} 

export const savePinInFolder = async (folderId, pinId) => {
    /**
     * Listar coleção/array de pastas do Storage
     * Encontrar a pasta queremos adicionar o pin
     * Adicionar o pinId na pasta
     * Salvar pastas no Storage novamente
     */

    const folders = await getFolders();

    const folderIndex = folders.findIndex(function(folder){
        return folder.id === folderId;
    });

    if(folderIndex !== -1){
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);

    return {...folders[folderIndex]};

}

export const getPins = async () => {
    return [
        {
            id: '123',
            title: 'Matematica',
            image: 'https://picsum.photos/200/300?53',
            total: 0
        },
        {
            id: '133',
            title: 'JavaScrpt',
            image: 'https://picsum.photos/200/300?15',
            total: 0
        },
        {
            id: '132',
            title: 'React JS',
            image: 'https://picsum.photos/200/300?50',
            total: 0
        }
    ]
}