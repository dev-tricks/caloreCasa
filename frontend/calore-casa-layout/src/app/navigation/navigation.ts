import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applicazioni',
        title: 'Gestione',
        translate: 'NAV.PRIMOTITOLO',
        type: 'group',
        children: [
            {
                id: 'caricaFile',
                title: 'Carica File',
                translate: 'NAV.CARICAFILE.TITOLO',
                type: 'item',
                icon: 'insert_drive_file',
                url: '/carica-file'
            }
        ]
    }
];
