export interface SidebarLink {
    path?: string;
    icon?: string;
    title: string;
    submenu?: SidebarLink[];
}

export const sidebarLinks: SidebarLink[] = [
    {
        path: 'home',
        icon: 'lni lni-home-2',
        title: 'Home'
    },
    {
        path: 'calendar',
        icon: 'lni lni-calendar-days',
        title: 'Calendar'
    },
    {
        path: 'profile',
        icon: 'lni lni-user-4',
        title: 'Profile'
    },
    {
        icon: 'lni lni-file-plus-circle',
        title: 'Create',
        submenu: [{
            path: 'folder',
            title: 'Folder'
        },
        {
            path: 'document',
            title: 'Document'
        },
        {
            path: 'project',
            title: 'Project'
        }]
    },
    {
        icon: 'lni lni-pen-to-square',
        title: 'Todo List',
        submenu: [{
            path: 'work',
            title: 'Work'
        },
        {
            path: 'private',
            title: 'Private'
        },
        {
            path: 'coding',
            title: 'Coding'
        }]
    }
]