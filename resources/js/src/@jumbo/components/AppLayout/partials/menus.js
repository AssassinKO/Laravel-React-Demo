import IntlMessages from '../../../utils/IntlMessages';
import {
  AccountCircle,
  ArrowForward,
  Category,
  Chat,
  CheckCircle,
  CloudUpload,
  Colorize,
  ContactMail,
  Contacts,
  Domain,
  DonutSmall,
  DragIndicator,
  Edit,
  EditAttributes,
  Email,
  Error,
  Event,
  Group,
  ImportContacts,
  InsertChart,
  LibraryBooks,
  LocalGroceryStore,
  LockOutlined,
  Map,
  MonetizationOn,
  NotificationImportant,
  Notifications,
  Pages,
  People,
  ShowChart,
  Timeline,
  VpnKey,
  Widgets,
} from '@material-ui/icons';
import React from 'react';

const dashboardsMenus = [
  {
    name: <IntlMessages id={'sidebar.dashboard.crypto'} />,
    icon: <MonetizationOn />,
    type: 'item',
    link: '/dashboard/crypto',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.listing'} />,
    icon: <Domain />,
    type: 'item',
    link: '/dashboard/listing',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.crm'} />,
    icon: <Group />,
    type: 'item',
    link: '/dashboard/crm',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.intranet'} />,
    icon: <DonutSmall />,
    type: 'item',
    link: '/dashboard/intranet',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.ecommerce'} />,
    icon: <LocalGroceryStore />,
    type: 'item',
    link: '/dashboard/eCommerce',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.news'} />,
    icon: <ImportContacts />,
    type: 'item',
    link: '/dashboard/news',
  },
  {
    name: <IntlMessages id={'sidebar.dashboard.misc'} />,
    icon: <LibraryBooks />,
    type: 'item',
    link: '/dashboard/misc',
  },
];

const muiComponentsInputsMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.buttons'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/buttons',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.buttonGroup'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/button-group',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.checkbox'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/checkbox',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.fab'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/fab',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.dateTime'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/date-time',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.radio'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/radio',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.select'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/select',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.slider'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/slider',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.switch'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/switch',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.textField'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/text-field',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.inputs.transferList'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/transfer-list',
  },
];

const muiComponentsNavigationMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.bottomNavigation'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/bottom-navigation',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.breadcrumb'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/breadcrumb',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.drawer'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/drawer',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.links'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/links',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.menu'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/menu',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.stepper'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/stepper',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.navigation.tabs'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/tabs',
  },
];

const muiComponentsSurfacesMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.surfaces.appBar'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/appbar',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.surfaces.paper'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/paper',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.surfaces.card'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/card',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.surfaces.accordion'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/accordion',
  },
];

const muiComponentsFeedbackMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.feedback.progress'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/progress',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.feedback.dialog'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/dialog',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.feedback.snackbar'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/snackbar',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.feedback.backdrop'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/backdrop',
  },
];

const muiComponentsDataDisplayMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.avatar'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/avatar',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.badge'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/badge',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.chip'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/chip',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.divider'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/divider',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.list'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/list',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.table'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/table',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.tooltip'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/tooltip',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay.typography'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/typography',
  },
];

const muiComponentsUtilsMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.clickAwayListener'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/click-away-listener',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.modal'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/modal',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.noSsr'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/no-ssr',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.popover'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/popover',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.popper'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/popper',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.portal'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/portal',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.textareaAutosize'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/textarea-autosize',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.utils.transitions'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/transitions',
  },
];

const muiComponentsLabMenus = [
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.alert'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/alert',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.autoComplete'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/auto-complete',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.pagination'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/pagination',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.rating'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/rating',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.skeleton'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/skeleton',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.speedDial'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/speed-dial',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.timeline'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/timeline',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.toggleButton'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/toggle-button',
  },
  {
    name: <IntlMessages id={'sidebar.components.muiComponents.muiLab.treeView'} />,
    type: 'item',
    icon: <ArrowForward />,
    link: '/components/mui/tree-view',
  },
];

const muiComponentsMenus = {
  name: <IntlMessages id={'sidebar.components.muiComponents'} />,
  icon: <Widgets />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.inputs'} />,
      type: 'section',
      children: muiComponentsInputsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.navigation'} />,
      type: 'section',
      children: muiComponentsNavigationMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.surfaces'} />,
      type: 'section',
      children: muiComponentsSurfacesMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.feedback'} />,
      type: 'section',
      children: muiComponentsFeedbackMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay'} />,
      type: 'section',
      children: muiComponentsDataDisplayMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.utils'} />,
      type: 'section',
      children: muiComponentsUtilsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.muiLab'} />,
      type: 'section',
      children: muiComponentsLabMenus,
    },
  ],
};

const muiComponentsHorizontalMenus = {
  name: <IntlMessages id={'sidebar.components.muiComponents'} />,
  icon: <Widgets />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.inputs'} />,
      type: 'collapse',
      children: muiComponentsInputsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.navigation'} />,
      type: 'collapse',
      children: muiComponentsNavigationMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.surfaces'} />,
      type: 'collapse',
      children: muiComponentsSurfacesMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.feedback'} />,
      type: 'collapse',
      children: muiComponentsFeedbackMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.dataDisplay'} />,
      type: 'collapse',
      children: muiComponentsDataDisplayMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.utils'} />,
      type: 'collapse',
      children: muiComponentsUtilsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.muiComponents.muiLab'} />,
      type: 'collapse',
      children: muiComponentsLabMenus,
    },
  ],
};

const cmtComponentsInputsMenus = [
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.inputs.buttons'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/buttons',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.inputs.search'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/search',
  },
];

const cmtComponentsDisplayMenus = [
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.carousel'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/carousel',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.avatar'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/avatar',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.avatarGroup'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/avatar-group',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.list'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/list',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.groupList'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/group-list',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.gridView'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/grid-view',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.mediaObject'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/media-object',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.objectSummary'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/object-summary',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.timeline'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/timeline',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.display.drawer'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/drawer',
  },
];

const cmtComponentsSurfaceMenus = [
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.surface.basicCard'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/basic-card',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.surface.expendableCard'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/expendable-card',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.surface.advancedCard'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/advanced-card',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.surface.revealCard'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/reveal-card',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.surface.backDrop'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/back-drop',
  },
];

const cmtComponentsFeedbackMenus = [
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.feedback.progressBar'} />,
    icon: <ArrowForward />,
    type: 'item',
    link: '/components/coremat/progressbar',
  },
  {
    name: <IntlMessages id={'sidebar.components.cmtComponents.feedback.notifications'} />,
    icon: <Notifications />,
    type: 'item',
    link: '/components/coremat/notifications',
  },
];

const cmtComponentsMenus = {
  name: <IntlMessages id={'sidebar.components.cmtComponents'} />,
  icon: <Widgets />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.inputs'} />,
      type: 'section',
      children: cmtComponentsInputsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.display'} />,
      type: 'section',
      children: cmtComponentsDisplayMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.surface'} />,
      type: 'section',
      children: cmtComponentsSurfaceMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.feedback'} />,
      type: 'section',
      children: cmtComponentsFeedbackMenus,
    },
  ],
};

const cmtComponentsHorizontalMenus = {
  name: <IntlMessages id={'sidebar.components.cmtComponents'} />,
  icon: <Widgets />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.inputs'} />,
      type: 'collapse',
      children: cmtComponentsInputsMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.display'} />,
      type: 'collapse',
      children: cmtComponentsDisplayMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.surface'} />,
      type: 'collapse',
      children: cmtComponentsSurfaceMenus,
    },
    {
      name: <IntlMessages id={'sidebar.components.cmtComponents.feedback'} />,
      type: 'collapse',
      children: cmtComponentsFeedbackMenus,
    },
  ],
};

const widgetsMenus = {
  name: <IntlMessages id={'sidebar.widgets'} />,
  icon: <Category />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.classic'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/widgets/classic',
    },
    {
      name: <IntlMessages id={'sidebar.modern'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/widgets/modern',
    },
  ],
};

const metricsMenus = {
  name: <IntlMessages id={'sidebar.metrics'} />,
  icon: <ShowChart />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.classic'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/metrics/classic',
    },
    {
      name: <IntlMessages id={'sidebar.modern'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/metrics/modern',
    },
  ],
};

const appsMenus = [
  {
    name: <IntlMessages id={'sidebar.appModule.mail'} />,
    type: 'item',
    icon: <Email />,
    link: '/apps/mail',
  },
  {
    name: <IntlMessages id={'sidebar.appModule.toDo'} />,
    type: 'item',
    icon: <CheckCircle />,
    link: '/apps/to-do',
  },
  {
    name: <IntlMessages id={'sidebar.appModule.contact'} />,
    type: 'item',
    icon: <ContactMail />,
    link: '/apps/contact',
  },
  {
    name: <IntlMessages id={'sidebar.appModule.chat'} />,
    type: 'item',
    icon: <Chat />,
    link: '/apps/chat',
  },
  {
    name: <IntlMessages id={'sidebar.appModule.kanbanBoard'} />,
    type: 'item',
    icon: <Chat />,
    link: '/apps/kanban-board',
  },
];

const socialAppsMenus = [
  {
    name: <IntlMessages id={'sidebar.profile'} />,
    type: 'item',
    icon: <AccountCircle />,
    link: '/apps/social-apps/profile',
  },
  {
    name: <IntlMessages id={'sidebar.wall'} />,
    type: 'item',
    icon: <Contacts />,
    link: '/apps/social-apps/wall',
  },
];

const editorsMenus = {
  name: <IntlMessages id={'sidebar.extensions.editors'} />,
  icon: <Edit />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.extensions.editors.ckEditor'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/editors/ck',
    },
    {
      name: <IntlMessages id={'sidebar.extensions.editors.wysiwygEditor'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/editors/wysiwyg',
    },
  ],
};

const pickersMenus = {
  name: <IntlMessages id={'sidebar.extensions.pickers'} />,
  icon: <Colorize />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.extensions.pickers.date'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/pickers/date',
    },
    {
      name: <IntlMessages id={'sidebar.extensions.pickers.time'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/pickers/time',
    },
    {
      name: <IntlMessages id={'sidebar.extensions.pickers.dateTimePickers'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/pickers/date-time',
    },
    {
      name: <IntlMessages id={'sidebar.extensions.pickers.colorPickers'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extensions/pickers/color',
    },
  ],
};

const extensionsMenus = [
  {
    name: <IntlMessages id={'sidebar.extensions.dragNDrop'} />,
    icon: <DragIndicator />,
    type: 'item',
    link: '/extensions/dnd',
  },
  {
    name: <IntlMessages id={'sidebar.extensions.dropzone'} />,
    icon: <CloudUpload />,
    type: 'item',
    link: '/extensions/dropzone',
  },
  {
    name: <IntlMessages id={'sidebar.extensions.sweetAlert'} />,
    icon: <NotificationImportant />,
    type: 'item',
    link: '/extensions/sweet-alert',
  },
  {
    name: <IntlMessages id={'sidebar.extensions.notification'} />,
    icon: <Notifications />,
    type: 'item',
    link: '/extensions/notification',
  },
];

const chartMenus = {
  name: <IntlMessages id={'sidebar.visualization.chart'} />,
  icon: <InsertChart />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.visualization.chart.line'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/line',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.bar'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/bar',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.area'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/area',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.composed'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/composed',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.scatter'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/scatter',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.pie'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/pie',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.radial'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/radial',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.radar'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/radar',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.chart.tree'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/chart/treemap',
    },
  ],
};

const mapsMenus = {
  name: <IntlMessages id={'sidebar.visualization.map'} />,
  icon: <Map />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.visualization.map.simple'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/simple',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.styled'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/styled',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.geoLocation'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/geo-location',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.mapDirection'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/directions',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.overlay'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/overlay',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.kmLayer'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/kml',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.popupInfo'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/popup-info',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.streetView'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/street-view',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.mapDrawing'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/drawing',
    },
    {
      name: <IntlMessages id={'sidebar.visualization.map.mapClustering'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/visualization/map/clustering',
    },
  ],
};

const materialTimelineMenus = {
  name: <IntlMessages id={'sidebar.materialTimeline'} />,
  icon: <Timeline />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.timeline.leftAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/material-timeline/left-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.rightAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/material-timeline/right-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.outlinedAndOpposite'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/material-timeline/outlined-apposite',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.centerAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/material-timeline/center-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.centerWithIcons'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/material-timeline/center-with-icon',
    },
  ],
};

const customTimelineMenus = {
  name: <IntlMessages id={'sidebar.customTimeline'} />,
  icon: <Timeline />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.timeline.leftAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/custom-timeline/left-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.rightAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/custom-timeline/right-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.centerAligned'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/custom-timeline/center-align',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.centerWithIcons'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/custom-timeline/center-with-icon',
    },
    {
      name: <IntlMessages id={'sidebar.timeline.zigzag'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/custom-timeline/zigzag',
    },
  ],
};

const errorPagesMenus = {
  name: <IntlMessages id={'sidebar.appModule.error'} />,
  icon: <Error />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.extraPages.404'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/error-404',
    },
    {
      name: <IntlMessages id={'sidebar.extraPages.500'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/error-500',
    },
  ],
};

const loginPagesMenus = {
  name: <IntlMessages id={'sidebar.appModule.login'} />,
  icon: <LockOutlined />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.appModule.login1'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/login',
    },
    {
      name: <IntlMessages id={'sidebar.appModule.login2'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/login-standard',
    },
  ],
};

const signupPagesMenus = {
  name: <IntlMessages id={'sidebar.appModule.signup'} />,
  icon: <Edit />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.appModule.signup1'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/sign-up',
    },
    {
      name: <IntlMessages id={'sidebar.appModule.signup2'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/sign-up-standard',
    },
  ],
};

const forgotPasswordMenus = {
  name: <IntlMessages id={'sidebar.appModule.forgotPassword'} />,
  icon: <EditAttributes />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.appModule.forgotPassword1'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/forgot-password',
    },
    {
      name: <IntlMessages id={'sidebar.appModule.forgotPassword2'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/forgot-password-standard',
    },
  ],
};

const calendarMenus = {
  name: <IntlMessages id={'sidebar.calendar'} />,
  icon: <Event />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.calendar.basic'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/basic',
    },
    {
      name: <IntlMessages id={'sidebar.calendar.cultures'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/cultures',
    },
    {
      name: <IntlMessages id={'sidebar.calendar.popup'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/popup',
    },
    {
      name: <IntlMessages id={'sidebar.calendar.rendering'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/rendering',
    },
    {
      name: <IntlMessages id={'sidebar.calendar.selectable'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/selectable',
    },
    {
      name: <IntlMessages id={'sidebar.calendar.timeslots'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/calendar/timeslots',
    },
  ],
};

const usersMenus = {
  name: <IntlMessages id={'sidebar.modules.users'} />,
  icon: <People />,
  type: 'item',
  link: '/users',
};

export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'section',
    children: dashboardsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.components'} />,
    type: 'section',
    children: [muiComponentsMenus, cmtComponentsMenus, widgetsMenus, metricsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.Apps'} />,
    type: 'section',
    children: appsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.social'} />,
    type: 'section',
    children: socialAppsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.view'} />,
    type: 'section',
    children: [customTimelineMenus, materialTimelineMenus],
  },
  {
    name: <IntlMessages id={'sidebar.extensions'} />,
    type: 'section',
    children: [editorsMenus, pickersMenus, ...extensionsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.modules'} />,
    type: 'section',
    children: [usersMenus, calendarMenus],
  },
  {
    name: <IntlMessages id={'sidebar.visualization'} />,
    type: 'section',
    children: [chartMenus, mapsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.extraPages'} />,
    type: 'section',
    children: [loginPagesMenus, signupPagesMenus, forgotPasswordMenus, errorPagesMenus],
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'collapse',
    children: dashboardsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.components'} />,
    type: 'collapse',
    children: [muiComponentsHorizontalMenus, cmtComponentsHorizontalMenus, widgetsMenus, metricsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.Apps'} />,
    type: 'collapse',
    children: appsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.social'} />,
    type: 'collapse',
    children: socialAppsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.visualization'} />,
    type: 'collapse',
    children: [chartMenus, mapsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.extras'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'sidebar.extraPages'} />,
        icon: <Pages />,
        type: 'collapse',
        children: [loginPagesMenus, signupPagesMenus, forgotPasswordMenus, errorPagesMenus],
      },
      customTimelineMenus,
      materialTimelineMenus,
      calendarMenus,
      usersMenus,
    ],
  },
  {
    name: <IntlMessages id={'sidebar.extensions'} />,
    type: 'mega',
    children: [
      editorsMenus,
      pickersMenus,
      {
        name: <IntlMessages id={'sidebar.extensions'} />,
        icon: <VpnKey />,
        type: 'collapse',
        children: extensionsMenus,
      },
    ],
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'collapse',
    children: dashboardsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.components'} />,
    type: 'collapse',
    children: [muiComponentsHorizontalMenus, cmtComponentsHorizontalMenus, widgetsMenus, metricsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.Apps'} />,
    type: 'collapse',
    children: [...appsMenus, ...socialAppsMenus],
  },
  {
    name: <IntlMessages id={'sidebar.extras'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'sidebar.extraPages'} />,
        icon: <Pages />,
        type: 'collapse',
        children: [loginPagesMenus, signupPagesMenus, forgotPasswordMenus, errorPagesMenus],
      },
      chartMenus,
      mapsMenus,
      customTimelineMenus,
      materialTimelineMenus,
      calendarMenus,
      usersMenus,
    ],
  },
  {
    name: <IntlMessages id={'sidebar.extensions'} />,
    type: 'mega',
    children: [
      editorsMenus,
      pickersMenus,
      {
        name: <IntlMessages id={'sidebar.extensions'} />,
        icon: <VpnKey />,
        type: 'collapse',
        children: extensionsMenus,
      },
    ],
  },
];
