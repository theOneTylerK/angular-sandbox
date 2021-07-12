import { Component } from "@angular/core";

@Component({
    selector: 'tak-home-dashboard',
    templateUrl: './home-dashboard.component.html',
    styleUrls: ['./home-dashboard.component.scss']
}) 

export class HomeDashboardComponent {
    /** The highlight color passed to the highlight directive */
    highlightColor = 'yellow';

    hasAuthorization = false;

    logEvent(event: any) {
        console.log("EVENT", event);
    }
}