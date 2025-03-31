import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { SidebarItemPresenter, SidebarPresenterAPI, RobotSettings } from "@universal-robots/contribution-api";

interface SignalSidebarItemPresenter extends Omit<SidebarItemPresenter, 'robotSettings' | 'presenterAPI'> {
    robotSettings: InputSignal<RobotSettings | undefined>;
    presenterAPI: InputSignal<SidebarPresenterAPI | undefined>;
}
@Component({
    selector: 'sample-sidebar',
    templateUrl: './sample-sidebar.component.html',
    styleUrls: ['./sample-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false,
})
export class SampleSidebarComponent implements SignalSidebarItemPresenter {
    readonly robotSettings = input<RobotSettings | undefined>();

    readonly presenterAPI = input<SidebarPresenterAPI | undefined>();

}
